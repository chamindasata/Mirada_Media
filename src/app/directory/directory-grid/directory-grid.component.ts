import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GriddataService } from '../services/griddata.service';
// import { observable, Observable } from 'rxjs';
// import { GridDataResult } from '@progress/kendo-angular-grid';


import { Observable } from 'rxjs/Rx';
import { GridComponent, GridDataResult, DataStateChangeEvent } from '@progress/kendo-angular-grid';

import { SortDescriptor, State, process, orderBy } from '@progress/kendo-data-query';

@Component({
  selector: 'app-directory-grid',
  templateUrl: './directory-grid.component.html',
  styleUrls: ['./directory-grid.component.css']
})
export class DirectoryGridComponent implements OnInit {

  @Output() selectedGrid : EventEmitter<any> =new EventEmitter<any>();
  public view: Observable<GridDataResult>;
  public directoryList:any;
  public allowUnsort = true;
   public gridState: State = {
  sort: [],
  // skip: GridPageSettings.skip,
  // take: GridPageSettings.take
  };

  public sort: SortDescriptor[] = [{
    field: 'name',
    dir: 'asc'
  }];

  public viewCompany: Observable<GridDataResult>;
  public companyList:any;
  public comgridState: State = {
  sort: [],
  // skip: GridPageSettings.skip,
  // take: GridPageSettings.take
  };

  public viewEmailList: Observable<GridDataResult>;
  public emailList:any;
  public emailgridState: State = {
  sort: [],
  // skip: GridPageSettings.skip,
  // take: GridPageSettings.take
  };
  // public gridData: any[];
  // products: any[];
  // constructor() {this.gridData = products; }

  // ngOnInit() {
    
  // }
  contacts$: Object;
  constructor( public _directiveService: GriddataService) {   
  }
 
  ngOnInit() {
    // this.data.getContacts().subscribe(
    // data =>{this.contacts$ = data} 
    // )
 
   this._directiveService.getContacts().subscribe(
     data =>{this.directoryList = data;
    console.log(this.directoryList );
    },
     error=>{},
     ()=>{
      this.view = Observable.of(this.directoryList).map(data => process(data, this.gridState));

     }
  
     )

     this._directiveService.getCompanies().subscribe(  
      data2 =>{this.companyList = data2;
     console.log(this.companyList );
     },
      error=>{},
      ()=>{
       this.viewCompany = Observable.of(this.companyList).map(data2 => process(data2, this.comgridState));
 
      }
   
      )
    
      this._directiveService.getEmailList().subscribe(  
        data3 =>{this.emailList = data3;
       console.log(this.emailList );
       },
        error=>{},
        ()=>{
         this.viewEmailList = Observable.of(this.emailList).map(data3 => process(data3, this.emailgridState));
   
        }
     
        )
 
    // .map(data => process(data, this.gridState));
  }
  public sortChange(sort: SortDescriptor[]): void {
    this.sort = sort;
   // this.loadProducts();
   this.directoryList = {
    data: orderBy(this.directoryList, this.sort),
    total: this.directoryList.length
};
  
}
toggleContact(){
  debugger;
  console.log("click 1");
  this.selectedGrid.emit("contact")
}
toggleCompany(){
  console.log("click 2");
  this.selectedGrid.emit("company")
}
toggleEmaillist(){
  console.log("click 3");
  this.selectedGrid.emit("emaillist")
}

}


