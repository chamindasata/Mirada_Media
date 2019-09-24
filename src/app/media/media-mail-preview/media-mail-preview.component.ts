import { MediaSocialSetup, MediaConfigureSetup } from './../../entity/mediamail';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-media-mail-preview',
  templateUrl: './media-mail-preview.component.html',
  styleUrls: ['./media-mail-preview.component.css']
})
export class MediaMailPreviewComponent implements OnInit {

  @Input() mediaPreview;
  
  mediaSocialSetup:MediaSocialSetup;
  mediaConfigureSetup:MediaConfigureSetup;
  pitchImageUrl:any;
  constructor() { }
 
  ngOnChanges() {
   
    this.mediaSocialSetup=this.mediaPreview.mediaSocialSetup;
    this.mediaConfigureSetup=this.mediaPreview.mediaConfigureSetup;
    this.pitchImageUrl=this.mediaPreview.mediaConfigureSetup.image;
  }

  ngOnInit() {
  }

  
}
