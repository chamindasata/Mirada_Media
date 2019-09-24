import { Component, OnInit, ViewChild } from '@angular/core';
import { GriddataService } from '../services/griddata.service';
import { observable } from 'rxjs';
import { ModalDirective } from 'ngx-bootstrap';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {

  @ViewChild('addContact') addContact: ModalDirective;
  @ViewChild('componentConfigurationModal') componentConfigurationModal: ModalDirective;
  contacts$: Object;
  constructor( private data: GriddataService) {   
  }
 
  ngOnInit() {
    this.data.getContacts().subscribe(
    data => this.contacts$ = data
    )
    
    this.data.getCompanies().subscribe(
      data => this.contacts$ = data
    )

    this.data.getEmailList().subscribe(
      data => this.contacts$ = data
    )
  }
  addcontact() {
    this.addContact.show();
  }

  toggle1(){
    console.log("click 0");
  }

  selectedGrid($event){
    console.log($event);
  }



}
 
