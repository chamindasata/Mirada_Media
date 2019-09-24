import { Injectable, EventEmitter } from '@angular/core';
import { MediaConfigureSetup, MediaShareSetup } from '../entity/mediamail';

@Injectable({
  providedIn: 'root'
})
export class MediaPlayerService {


  public mediaConfigureEmitter$: EventEmitter<MediaConfigureSetup>;
  public mediaConfigurationSetup: MediaConfigureSetup;

  public templateConfiguration$: EventEmitter<any>;
  mediaTemplateDataDetail: any;

  public mediaShareConfiguration$:EventEmitter<MediaShareSetup>;
  mediaShareDetail:MediaShareSetup;


  public componentDetailConfiguration$: EventEmitter<any>;
  componentDataDetail: any;

  public mediaSocialEmitter$: EventEmitter<any>;


  constructor() {
    this.mediaConfigureEmitter$ = new EventEmitter();
    this.templateConfiguration$ = new EventEmitter();
    this.componentDetailConfiguration$ = new EventEmitter();
    this.mediaSocialEmitter$ = new EventEmitter();
    this.mediaShareConfiguration$ =new EventEmitter();

  }

  public mediaCofigurationList() {
    return this.mediaConfigurationSetup;
  }


  mediaConfigure(details: MediaConfigureSetup): void {
    this.mediaConfigurationSetup = details;
    this.mediaConfigureEmitter$.emit(details);
  }

  socialConfigure(socialDetails: any) {
    this.mediaSocialEmitter$.emit(socialDetails);
  }

  mediaTemplateConfigure(mediaComponentName, dataDetail) {

    let mediaConfiguration = {
      componentName: mediaComponentName,
      isConfigEnale: true,
      detailData: dataDetail
    }
    this.mediaTemplateDataDetail = dataDetail;
    this.templateConfiguration$.emit(mediaConfiguration);

  }
  mediaTemplateDetail() {

    return this.mediaTemplateDataDetail;
  }

mediaShareConfigure(details:MediaShareSetup){

  this.mediaShareConfiguration$.emit(details);

}


  //componet configuration inside data changes 
  changeComponentDetails(componentDetails) {
    this.componentDetailConfiguration$.emit(componentDetails);

  }

}
