import { MediamailService } from './../../service/mediamail.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs/Rx';
import { GridDataResult } from '@progress/kendo-angular-grid';

import { GridPageSettings } from 'src/app/appsetting';
import { SortDescriptor, State, process, filterBy } from '@progress/kendo-data-query';
import { map } from 'rxjs/operators';
// export const mediaMail = [{
//   "id": 1,
//   "image": "https://www.gstatic.com/webp/gallery/1.jpg",
//   "createdOn": "09/08/2019 10:45 AM",
//   "MediaMail": "MediaMail",
//   "TotalPlays": 354,
//   "sendTo": 354,
//   "from": "Bob Barker"
// },
// {
//   "id": 2,
//   "image": "https://www.gstatic.com/webp/gallery/2.webp",
//   "createdOn": "09/08/2019 10:45 AM",
//   "MediaMail": "MediaMail",
//   "TotalPlays": 1930,
//   "sendTo": 1930,
//   "from": "Tommy Wiseau"
// },
// {
//   "id": 3,
//   "image": "https://www.gstatic.com/webp/gallery/4.webp",
//   "createdOn": "09/08/2019 10:45 AM",
//   "MediaMail": "MediaMail",
//   "TotalPlays": 1930,
//   "sendTo": 1930,
//   "from": "Bob Wiseau"
// },

// ]


@Component({
  selector: 'app-media-grid',
  templateUrl: './media-grid.component.html',
  styleUrls: ['./media-grid.component.css']
})
export class MediaGridComponent implements OnInit {

  public mediaMailList: any[];

  public gridState: State = {
    sort: [],
    skip: GridPageSettings.skip,
    take: GridPageSettings.takeThirty
  };


  public pageSize = 10;
  public skip = 0;
  public view: Observable<GridDataResult>;

  constructor(public mediamailService: MediamailService, public toastrService: ToastrService) { }

  ngOnInit() {
    this.getAllMediaMailList();
  }




  selectedMediaMail($event, dataItem) {

  }


  getAllMediaMailList() {

    this.view = this.mediamailService.getAllMediaList().pipe(map(res =>{
      this.mediaMailList=res;
      return process(res, this.gridState)
    
    } ))


    // this.mediamailService.getAllMediaList().subscribe(
    //   res => {
    //     debugger;
    //     this.mediaMailList=res;
    //     // console.log(res);
    //   },
    //   error => {
    //     debugger;
    //     console.log(error);
    //     this.toastrService.error(error.error.status, "Error !")
    //   }
    // )
  }


  public onStateChange(state: State) {

    this.gridState = state;
    this.view = Observable.of(this.mediaMailList).map(data => process(data, this.gridState));
    
    // this.mediamailService.getAllMediaList().pipe(map(res => process(res, this.gridState)))

  }

  onInput(filter) {
    this.view = Observable.of(filterBy(this.mediaMailList, {
      field: 'display_name',
      operator: 'contains',
      value: filter
    })).map(data => process(data, this.gridState));
  }

}
