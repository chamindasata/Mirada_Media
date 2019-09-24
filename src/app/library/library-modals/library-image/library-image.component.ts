import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { RowClassArgs } from '@progress/kendo-angular-grid';
import { LibraryService } from './../../../service/library.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Folder } from './../../../entity/libraray';

@Component({
  selector: 'app-library-image',
  templateUrl: './library-image.component.html',
  styleUrls: ['./library-image.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class LibraryImageComponent implements OnInit {

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

  constructor(public bsModalRef: BsModalRef, 
    public libraryService: LibraryService, 
    public formbuilder: FormBuilder, 
    public toaster: ToastrService) { }

  ngOnInit() {
    this.libraryService.getAssetFolders().subscribe((response) => {
      this.folders = response;
    });
  }

  //add strip rows
  public rowCallback(context: RowClassArgs) {
    const isEven = context.index % 2 == 0;
    return {
      even: isEven,
      odd: !isEven
    };
  }

  onFolderChange () {
    this.selectedFolder = this.selectedValue;
}
  
  selectImageFile(files: any) {
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
          this.isloading = false;
          this.bsModalRef.hide();
        },
        error => {
          this.toaster.error('Error while uploading ' + file.name + '.please try again!');
        });
    }
    
  }

}
