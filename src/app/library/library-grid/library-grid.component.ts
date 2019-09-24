import { Component, OnInit, Input,  ViewEncapsulation,} from '@angular/core';
import { RowClassArgs } from '@progress/kendo-angular-grid';
import { AudioService } from './../../service/audio.service';
import { Asset } from './../../entity/libraray';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ViewAssetModalComponent } from './../library-modals/view-asset-modal/view-asset-modal.component';

@Component({
  selector: 'app-library-grid',
  templateUrl: './library-grid.component.html',
  styleUrls: ['./library-grid.component.css'],
  encapsulation: ViewEncapsulation.None,

})
export class LibraryGridComponent implements OnInit {

  @Input() gridData: any;
  assetModal : BsModalRef;

  constructor(private modalService: BsModalService, 
    private _audioService: AudioService) { }

  ngOnInit() {

  }

  //add strip rows
  public rowCallback(context: RowClassArgs) {
    const isEven = context.index % 2 == 0;
    return {
      even: isEven,
      odd: !isEven
    };
  }

  //check media type
  mediaTypelogo(dataItem) {
    var mimeType = dataItem.mime_content_type;
    if (mimeType.startsWith('audio/'))
      return '<span class="la la-music grid-icon"></span>';
    else if (mimeType.startsWith('video/'))
      return '<span class="la la-file-video-o grid-icon"></span>';
    else if (mimeType.startsWith('image/'))
      return '<span class="la la-file-image-o grid-icon"></span>'
    else if (mimeType === 'application/pdf')
      return '<span class="la la-file grid-icon"></span>';
    else
      return "";
  }

  meadiaViewType(dataItem) {
    var mimeType = dataItem.mime_content_type;
    if (mimeType.startsWith('image/') || (mimeType === 'application/pdf'))
      return '<div class="asset-view"><i class="la la-eye view-btn"></i></div>'
    else if(mimeType.startsWith('video/'))
      return '<div class="track-play" ><i class="ion-ios-play play-btn"></i></div>'
    else
      return "";
  }

  playAudio(asset: Asset) {
    let song= {name: asset.AssetName, id: 0 , uri: asset.viewUrl};
    this._audioService.playSong(song)
  }

  displayAsset (asset: Asset) {
    const initialState = {
      title: asset.AssetName,
      viewUrl: asset.viewUrl,
      type:asset.mime_content_type
    };

    this.assetModal = this.modalService.show(ViewAssetModalComponent, { initialState, class: 'modal-lg'});
  }


}
