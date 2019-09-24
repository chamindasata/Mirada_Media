import { Component, OnInit } from '@angular/core';
import { SelectableSettings } from '@progress/kendo-angular-grid';
import { MediaPlayerService } from 'src/app/service/media-player.service';
import { filterBy } from '@progress/kendo-data-query';

export const images = [{
  "id": 1,
  "Name": "img 1",
  "SupplierID": 1,
  "type": ".jpg",
  "imageSrc": "https://picsum.photos/id/1011/5472/3648"
}, {
  "id": 2,
  "Name": "img 2",
  "SupplierID": 2,
  "type": ".jpg",
  "imageSrc": "https://picsum.photos/id/1014/6016/4000"
}, {
  "id": 3,
  "Name": "img 3",
  "SupplierID": 3,
  "type": ".jpg",
  "imageSrc": "https://picsum.photos/id/1082/5416/3611"
}, {
  "id": 4,
  "Name": "img 4",
  "SupplierID": 4,
  "type": ".jpg",
  "imageSrc": "https://picsum.photos/id/145/4288/2848"
}

]

@Component({
  selector: 'app-media-image-configuration',
  templateUrl: './media-image-configuration.component.html',
  styleUrls: ['./media-image-configuration.component.css']
})
export class MediaImageConfigurationComponent implements OnInit {

  componentConfigureDetail: any;


  public selectableSettings: SelectableSettings = {
    checkboxOnly: false,
    mode: "single"
  };;
  public gridData: any[] = images;


  constructor(public mediaPlayerService: MediaPlayerService) {

  }



  ngOnInit() {
    this.componentConfigureDetail = this.mediaPlayerService.mediaTemplateDetail();

  }

  selectedimage(event, dataItem) {
    this.componentConfigureDetail.details.imageDetail = dataItem;
    console.log(this.componentConfigureDetail);
    this.mediaPlayerService.changeComponentDetails(this.componentConfigureDetail);

  }

  searchInput(filter) {
    this.gridData = filterBy(images, {
      field: 'Name',
      operator: 'contains',
      value: filter
    });
  }

  // selectedVideo(event, dataItem) {
  //   this.componentConfigureDetail.details.imageDetail = dataItem;
  //   console.log(this.componentConfigureDetail);
  //   this.mediaPlayerService.changeComponentDetails(this.componentConfigureDetail);

  // }

  selectMediaMailVideo($event){}

}
