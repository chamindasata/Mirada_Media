import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-view-asset-modal',
  templateUrl: './view-asset-modal.component.html',
  styleUrls: ['./view-asset-modal.component.css']
})
export class ViewAssetModalComponent implements OnInit {

  title: string;
  viewUrl: string;
  type: string;

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {

  }

}
