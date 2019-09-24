import { MediaPlayerService } from './../../service/media-player.service';
import { Component, OnInit, ViewChild, Input, TemplateRef } from '@angular/core';
import { MediaMailSetup, MediaSocialSetup, templateComponents, MediaConfigureSetup } from 'src/app/entity/mediamail';

import { BsModalService, BsModalRef, ModalDirective } from 'ngx-bootstrap/modal';
import { MediaTextComponent } from '../mediacomponents/media-text/media-text.component';
import { MediaTextConfigurationComponent } from '../mediacomponents/media-text-configuration/media-text-configuration.component';
import { MediaTemplateCategorySections } from 'src/app/_helpers/common.enum';
import { MediaAudioComponent } from '../mediacomponents/media-audio/media-audio.component';
import { MediaAudioConfigurationComponent } from '../mediacomponents/media-audio-configuration/media-audio-configuration.component';
import { MediaVideoConfigurationComponent } from '../mediacomponents/media-video-configuration/media-video-configuration.component';
import { MediaImageConfigurationComponent } from '../mediacomponents/media-image-configuration/media-image-configuration.component';



export const sampleProducts = [
  {

    "name": "textComponent",
    "text": "first",
    "column": "col-md-6",
    "details": {
      "textValue": "text text test"
    }
  },
  {

    "name": "textComponent",
    "text": "secound",
    "column": "col-md-6",
    "details": {
      "textValue": "afdsf"
    }
  },
  {

    "name": "audioComponent",
    "text": "secound",
    "column": "col-md-6",
    "details": {
      "textValue": "teww",
      "audioDetail": [
        {
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
        },
      ]
    }
  },
  {

    "name": "dummyComponent",
    "text": "",
    "column": "col-md-6",
    "details": {
      "textValue": ""
    }
  },
  {

    "name": "dummyComponent",
    "text": "",
    "column": "col-md-12",
    "details": {
      "textValue": ""
    }
  },

]
@Component({
  selector: 'app-media-mail-template',
  templateUrl: './media-mail-template.component.html',
  styleUrls: ['./media-mail-template.component.css']
})
export class MediaMailTemplateComponent implements OnInit {
  // modalRef: BsModalRef;
  @ViewChild('selectCompoModal') selectCompoModal: ModalDirective;
  @ViewChild('componentConfigurationModal') componentConfigurationModal: ModalDirective;
 

  templateComponent = MediaTemplateCategorySections;
  selectedSetupComponent:any;
  selectedComponentName:string;
  mediaConfigureSetup:MediaConfigureSetup;

  pitchImageUrl: string = "";
  mediaMailTitle: string = "media mail list title";
  mediaMailProjectName: string = "projectName";

  screenInfomations:templateComponents[] = sampleProducts;
  mediaSocialSetup: MediaSocialSetup;

  @Input() editSectionEnable: boolean;

  // dummyComontnent = MediaTextComponent;
   @Input() setupDetail:MediaMailSetup;

  constructor(public mediaPlayerService: MediaPlayerService, private modalService: BsModalService) {


    this.mediaPlayerService.mediaConfigureEmitter$.subscribe(item => {
      this.mediaConfigureSetup=item
      this.mediaMailTitle = item.title;
      this.mediaMailProjectName = item.projectName;

    })

    this.mediaPlayerService.mediaSocialEmitter$.subscribe(item => {
      this.mediaSocialSetup = item;
    });

  }

  // ngOnChanges(): void {
  //   debugger;
  //   //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
  //   //Add '${implements OnChanges}' to the class.
  //  this.mediaMailTitle=this.setupDetail.mediaConfigureSetup.title;
  // }

  ngOnInit() {
    console.log(this.screenInfomations);
  }

  selectMediaMailcover(event) {
    console.log(event);
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.pitchImageUrl = event.target.result;
        this.mediaConfigureSetup.image=event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  // openModal(template: TemplateRef<any>) {
  //   this.modalRef = this.modalService.show(template);
  // }
  public selectedComponentData;
  componentChange(item, i) {
    // item.text="hello";
    // item.componentName=MediaTextConfigurationComponent;
    this.selectedComponentData = item;

    this.selectCompoModal.show();
  }


  hideChildModal() {
    this.selectCompoModal.hide();
  }


  ChangeComponentDynamic(selectedComponName, itemsToChange) {
    this.componentConfigurationModal.show();
   
    switch (selectedComponName) {

      case MediaTemplateCategorySections.Audio: {
        //statements; 
        this.updateTemplateWidget("audioComponent", itemsToChange)
        this.mediaPlayerService.mediaTemplateConfigure(MediaAudioConfigurationComponent, itemsToChange);
      this.selectedSetupComponent=MediaAudioConfigurationComponent;
      this.selectedComponentName="Add Audio";
        break;
      }
      case MediaTemplateCategorySections.Image: {
        //statements; 
        this.updateTemplateWidget("imageComponent", itemsToChange);
        this.mediaPlayerService.mediaTemplateConfigure(MediaImageConfigurationComponent, itemsToChange);
        this.selectedSetupComponent=MediaImageConfigurationComponent;
        this.selectedComponentName="Add Image";
        break;
      }
      case MediaTemplateCategorySections.LineBreakUp: {
        //statements; 
        this.updateTemplateWidget("lineupComponent", itemsToChange)
        this.mediaPlayerService.mediaTemplateConfigure("", itemsToChange);
        this.selectedSetupComponent="";
        this.selectedComponentName="";
        break;
      }
      case MediaTemplateCategorySections.TextBlock: {
        //statements; 
        this.updateTemplateWidget("textComponent", itemsToChange);
        this.mediaPlayerService.mediaTemplateConfigure(MediaTextConfigurationComponent, itemsToChange);
        this.selectedSetupComponent=MediaTextConfigurationComponent;
        this.selectedComponentName="Add Text";


        break;
      }
      case MediaTemplateCategorySections.Video: {
        //statements; 
        this.updateTemplateWidget("videoComponent", itemsToChange);
        this.mediaPlayerService.mediaTemplateConfigure(MediaVideoConfigurationComponent, itemsToChange);
        this.selectedSetupComponent=MediaVideoConfigurationComponent;
        this.selectedComponentName="Add Video";
        break;
      }
      default: {
        //statements; 
        break;
      }
    }


  }


  updateTemplateWidget(selectedComponent, itemsToChange) {
    // itemsToChange.text = "hello";
    itemsToChange.name = selectedComponent;
    this.addNewDummyElementLast();
    this.hideChildModal();
  }

  isOdd(i) {
    if (i % 2 == 0) {
      return true;
    } else {
      return false;
    }


  }



  columnMinus(item, i) {
    item.column = "col-md-12"
  }
  columnPlus(item, i) {
    item.column = "col-md-6"
  }


  addNewDummyElementLast() {
    let lastElement = this.screenInfomations[this.screenInfomations.length - 1];
    if (lastElement.name !== "dummyComponent") {
      this.screenInfomations.push({
        "name": "dummyComponent", "text": "", "column": "col-md-12", "details": { "textValue": "" }
      });
    }

  }

}
