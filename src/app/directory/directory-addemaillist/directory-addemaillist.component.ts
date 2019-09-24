import { Component, OnInit, ViewChild } from '@angular/core';
import { BsModalService, BsModalRef, ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-directory-addemaillist',
  templateUrl: './directory-addemaillist.component.html',
  styleUrls: ['./directory-addemaillist.component.css']
})
export class DirectoryAddemaillistComponent implements OnInit {

  public gridData: any[];
  products: any[];

  @ViewChild('addDirectoryEmail') addDirectoryEmail: ModalDirective;
  @ViewChild('componentConfigurationModal') componentConfigurationModal: ModalDirective;
  constructor(private modalService: BsModalService) {this.gridData = products; }

  ngOnInit() {
  }
  addfromdirecoty() {

    this.addDirectoryEmail.show();
  }
}
 
const products = [{
  "First Name": "1",
  "Last Name": "Chai1",
  "Title": "title1",
  "Email": "abc@abc.com",
  "Company": "Company1"

}, {
  "First Name": "2",
  "Last Name": "Chai2",
  "Title": "title2",
  "Email": "abc@abc2.com",
  "Company": "Company2"
},{
  "First Name": "3",
  "Last Name": "Chai3",
  "Title": "title3",
  "Email": "abc@abc3.com",
  "Company": "Company3"
},{
  "First Name": "4",
  "Last Name": "Chai4",
  "Title": "title4",
  "Email": "abc@abc4.com",
  "Company": "Company4"
},{
  "First Name": "4",
  "Last Name": "Chai4",
  "Title": "title4",
  "Email": "abc@abc4.com",
  "Company": "Company4"
},{
  "First Name": "4",
  "Last Name": "Chai4",
  "Title": "title4",
  "Email": "abc@abc4.com",
  "Company": "Company4"
},{
  "First Name": "4",
  "Last Name": "Chai4",
  "Title": "title4",
  "Email": "abc@abc4.com",
  "Company": "Company4"
},{
  "First Name": "4",
  "Last Name": "Chai4",
  "Title": "title4",
  "Email": "abc@abc4.com",
  "Company": "Company4"
},{
  "First Name": "4",
  "Last Name": "Chai4",
  "Title": "title4",
  "Email": "abc@abc4.com",
  "Company": "Company4"
},{
  "First Name": "4",
  "Last Name": "Chai4",
  "Title": "title4",
  "Email": "abc@abc4.com",
  "Company": "Company4"
},{
  "First Name": "4",
  "Last Name": "Chai4",
  "Title": "title4",
  "Email": "abc@abc4.com",
  "Company": "Company4"
}
];
