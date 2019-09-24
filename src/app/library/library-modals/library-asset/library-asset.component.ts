import { Component, OnInit, ViewEncapsulation, EventEmitter, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { RowClassArgs } from '@progress/kendo-angular-grid';
import { LibraryService } from './../../../service/library.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Folder } from './../../../entity/libraray';
import { Subject } from 'rxjs/Subject';


@Component({
  selector: 'app-library-asset',
  templateUrl: './library-asset.component.html',
  styleUrls: ['./library-asset.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class LibraryAssetComponent implements OnInit {

  @Output() RefreshAsset = new EventEmitter();
  onClose: Subject<boolean>;

  folders: any;
  gridData: any[];
  assetFile: any;
  newAssetFiles: any[] = [];
  selectedFolderData: any = null;
  selectedFolderId: any= null

  form: FormGroup;
  modalRef: BsModalRef;
  selectedValue: Folder = null;
  selectedFolder:Folder = null;
  isloading: boolean = false;
  isFolders: boolean = false;


  constructor(public bsModalRef: BsModalRef, 
    public libraryService: LibraryService, 
    public formbuilder: FormBuilder, 
    public toaster: ToastrService) { }

  ngOnInit() {
    this.onClose = new Subject();
    this.libraryService.getAssetFolders().subscribe((response) => {
      this.folders = response;
      this.isFolders = true;
    });
  }

  //add strip rows
  rowCallback(context: RowClassArgs) {
    const isEven = context.index % 2 == 0;
    return {
      even: isEven,
      odd: !isEven
    };
  }

  onFolderChange () {
    if(this.selectedValue) {
      this.selectedFolder = this.selectedValue;
    }
  }

  selectFile(files: any) {
    if (files.length === 0) {
      this.toaster.error('Please select one or more files to upload');
      return;
    }
    for (let item of files) {
      this.newAssetFiles.push(item);
    }
    this.gridData = this.newAssetFiles;
  }

  multipleUploadFiles() {

    for (let file of this.newAssetFiles) {
      this.isloading = true;
      let formModel = new FormData();
      formModel.append('AssetName', file.name);
      formModel.append('File', file);

      if (this.selectedFolder) {
        formModel.append('folder', JSON.stringify(this.selectedFolder));
        formModel.append('folder_id', JSON.stringify(this.selectedFolder.id));
      }

      this.libraryService.addNewAsset(formModel).subscribe(
        (response: any) => {
          this.toaster.success(file.name + ' uploaded sucessfully!');
          this.onClose.next(true);
          this.isloading = false;
          this.bsModalRef.hide();
        },
        error => {
          this.onClose.next(false);
          this.bsModalRef.hide();
          this.toaster.error('Error while uploading ' + file.name + '.please try again!');
        });
    }
    
  }

}
