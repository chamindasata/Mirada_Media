import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css']
})
export class ConfirmModalComponent implements OnInit {

  success: Subject<boolean>;
  modalRef: BsModalRef;

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
    this.success = new Subject();
  }

  confirm() {
    this.success.next(true);
    this.bsModalRef.hide();
  }

  decline() {
    this.success.next(false);
    this.bsModalRef.hide();
  }

}
