import { Component, OnInit, Input, TemplateRef, EventEmitter, Output} from '@angular/core';
import { LibraryService } from './../../service/library.service';
import { FolderContent, Folder} from '../../entity/libraray'
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { ConfirmModalComponent } from './../library-modals/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-library-folder',
  templateUrl: './library-folder.component.html',
  styleUrls: ['./library-folder.component.css']
})
export class LibraryFolderComponent implements OnInit {

  @Input() public folderId: number;
  @Output() sharedVarChange = new EventEmitter();
  @Output() changeFolders = new EventEmitter();

  confirmModal : BsModalRef;

  folder: any;
  folderName: string;
  gridData: any = [];
  ishide: boolean = false;
  isloading: boolean = true;
  isDelete: boolean = true;
  currentFolder: any;

  constructor(private libraryService: LibraryService, private modalService: BsModalService, public toastr : ToastrService) { }
  
  ngOnInit() {
    this.showFolderData();
  }

  showFolderData () {
    this.libraryService.getFolderContent(this.folderId).subscribe((data: FolderContent ) => {

      this.folder = data;
      this.folderName = data.folder_name;
      this.gridData = data.assets;
     this.isloading = !this.isloading;

    });
  }

  deleteFolder(template: TemplateRef<any>) {
    if (this.gridData.length > 0) {
      console.log(this.gridData.lenght);
      this.toastr.error("Cannot delete a folder that has assets in it.")
    }
    else {
      this.confirmModal = this.modalService.show( ConfirmModalComponent ,{class: 'modal-sm'});

      this.confirmModal.content.success.subscribe(result => {
        if(result) {

          this.currentFolder = {
            created_at: this.folder.created_at,
            deleted_at: this.folder.deleted_at,
            enable_share: this.folder.enable_share,
            folder_name: this.folder.folder_name,
            id: this.folder.id,
            universe_id: this.folder.universe.id,
            updated_at: this.folder.updated_at ,
            user_id: this.folder.user_id,
            _destroy: true
          }

          this.libraryService.deleteFolder(this.folderId, this.currentFolder).subscribe(response => {
            this.sharedVarChange.emit(this.ishide);
            this.toastr.success("Folder deleted sucessfully");
          },
          error => {
          this.toastr.error("Error");
          })
        }
    });
    
    }
  }

  loadRootFolder(){
    this.sharedVarChange.emit(this.ishide);
  }

}
