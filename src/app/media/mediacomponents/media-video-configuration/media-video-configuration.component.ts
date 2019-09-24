import { Component, OnInit } from '@angular/core';
import { MediaPlayerService } from 'src/app/service/media-player.service';
import { SelectableSettings, SelectAllCheckboxState, RowArgs } from '@progress/kendo-angular-grid';
import { filterBy } from '@progress/kendo-data-query';


export const videos = [{
  "id": 1,
  "Name": "video 1",
  "SupplierID": 1,
  "type": ".MP4",
  "videoSrc": "https://germini.info/wp-content/uploads/2015/10/CameraLensVideo.mp4"
}, {
  "id": 2,
  "Name": "video 2",
  "SupplierID": 2,
  "type": ".MPG",
  "videoSrc": ""
}, {
  "id": 3,
  "Name": "video 3",
  "SupplierID": 3,
  "type": ".MP3",
  "videoSrc": ""
}, {
  "id": 4,
  "Name": "video 4",
  "SupplierID": 4,
  "type": ".MP3",
  "videoSrc": ""
}

]


@Component({
  selector: 'app-media-video-configuration',
  templateUrl: './media-video-configuration.component.html',
  styleUrls: ['./media-video-configuration.component.css']
})
export class MediaVideoConfigurationComponent implements OnInit {

  componentConfigureDetail: any;
 

  public selectableSettings: SelectableSettings = {
    checkboxOnly: false,
    mode: "single"
  };;
  public gridData: any[] = videos;


  constructor(public mediaPlayerService: MediaPlayerService) {

  }

  public mySelection: string[] = [];
  
    public mySelectionKey(context: RowArgs): string {
     
      // this.mediaPlayerService.changeComponentDetails(context.dataItem);
        return context.dataItem.Name + ' ' + context.index;
    }
//   public onSelectAllChange(checkedState: SelectAllCheckboxState) {
//     debugger;
//     if (checkedState === 'checked') {
//         // this.mySelection = this.items.map((item) => item.ProductID);
//         // this.selectAllState = 'checked';
//     } else {
//         // this.mySelection = [];
//         // this.selectAllState = 'unchecked';
//     }
// }

  ngOnInit() {
    this.componentConfigureDetail = this.mediaPlayerService.mediaTemplateDetail();

  }

  selectMediaMailVideo(event) {

  }

  selectedVideo(event, dataItem) {
    this.componentConfigureDetail.details.videoDetail=dataItem;
    console.log(this.componentConfigureDetail);
    this.mediaPlayerService.changeComponentDetails(this.componentConfigureDetail);

  }


  searchInput(filter) {
  
  this.gridData = filterBy(videos, {
      field: 'Name',
      operator: 'contains',
      value: filter
    });
  }

}
