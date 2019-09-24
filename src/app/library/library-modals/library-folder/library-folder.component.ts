import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { LibraryService } from "../../../../app/service/library.service";
import { FormGroup, FormControl } from '@angular/forms';
import {AssetFolder} from './../../../entity/libraray';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-library-folder-modal',
  templateUrl: './library-folder.component.html',
  styleUrls: ['./library-folder.component.css']
})
export class LibraryFolderModalComponent implements OnInit {
  isNewFolder: Subject<boolean>;

  constructor(public bsModalRef: BsModalRef, private libraryService: LibraryService, public toaster : ToastrService) { }

  public addFolderForm=new FormGroup({
    folderName:new FormControl("")
  });

  ngOnInit() {
    this.isNewFolder = new Subject();
  }

  onSubmit(formData ) {
    this.libraryService.addNewFolder(formData.folderName)
    .subscribe((folder: AssetFolder) => {
      this.isNewFolder.next(true);
      this.toaster.success("Folder Added sucessfully");
    },
    error => {
      this.isNewFolder.next(false);
      this.toaster.error("Error. Please try again");
    });
  }

}
