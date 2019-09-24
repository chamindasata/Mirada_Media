import { Component, OnInit } from '@angular/core';
import { MediaPlayerService } from 'src/app/service/media-player.service';
import { filterBy } from '@progress/kendo-data-query';



export const products = [{
  "id": 1,
  "Name": "song 1",
  "SupplierID": 1,
  "type": ".MP3",
  "Url": ""
}, {
  "id": 2,
  "Name": "song 2",
  "SupplierID": 2,
  "type": ".MP3",
  "Url": ""
}, {
  "id": 3,
  "Name": "song 3",
  "SupplierID": 3,
  "type": ".MP3",
  "Url": ""
}, {
  "id": 4,
  "Name": "song 4",
  "SupplierID": 4,
  "type": ".MP3",
  "Url": ""
}

]

@Component({
  selector: 'app-media-audio-configuration',
  templateUrl: './media-audio-configuration.component.html',
  styleUrls: ['./media-audio-configuration.component.css']
})
export class MediaAudioConfigurationComponent implements OnInit {




  componentConfigureDetail: any;

  constructor(public mediaPlayerService: MediaPlayerService) {

  }

  ngOnInit() {

    this.componentConfigureDetail = this.mediaPlayerService.mediaTemplateDetail();

    console.log(this.componentConfigureDetail);
  }



  public gridData: any[] = products;
  selectMediaMailAudioImg(event) {

  }

  searchInput(filter) {
    this.gridData = filterBy(products, {
      field: 'Name',
      operator: 'contains',
      value: filter
    });
  }



  selectedMusic(event, dataItem) {
    
    // console.log(event.target.checked);

    if (event.target.checked) {

      if (this.componentConfigureDetail.details.audioDetail) {
        this.componentConfigureDetail.details.audioDetail.push(dataItem);
      }
      else {
        this.componentConfigureDetail.details.audioDetail = [];
        this.componentConfigureDetail.details.audioDetail.push(dataItem);
      }

      // console.log( this.componentConfigureDetail);
    } else {
      console.log(event.target.checked);
      const index: number = this.componentConfigureDetail.details.audioDetail.findIndex((x) => x.id === dataItem.id);
      if (index !== -1) {

        this.componentConfigureDetail.details.audioDetail.splice(index, 1);
      }
    }

    this.mediaPlayerService.changeComponentDetails(this.componentConfigureDetail);
  }


}
