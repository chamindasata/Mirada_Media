import { Component, OnInit } from '@angular/core';
import { MediaPlayerService } from 'src/app/service/media-player.service';

import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-media-text-configuration',
  templateUrl: './media-text-configuration.component.html',
  styleUrls: ['./media-text-configuration.component.css']
})
export class MediaTextConfigurationComponent implements OnInit {

  config: AngularEditorConfig = {



    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '150px',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    // uploadUrl: 'v1/image',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' }
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
   
  };
  textFieldContent: any;
  componentConfigureDetail: any;

  constructor(public mediaPlayerService: MediaPlayerService) {

  }

  ngOnInit() {

    this.componentConfigureDetail = this.mediaPlayerService.mediaTemplateDetail();

    this.textFieldContent = this.componentConfigureDetail.details.textValue;

    //     this.mediaPlayerService.templateConfiguration$.subscribe(
    //       item => {
    //         debugger;
    // console.log(item);
    //         this.textFieldContent= item.details.textValue;

    //       }
    //     )

    console.log(this.textFieldContent);
  }


  focusOutFunction() {
 
    // changeComponentDetails
    console.log("focusout");
    console.log(this.componentConfigureDetail);
    this.mediaPlayerService.changeComponentDetails(this.componentConfigureDetail);


  }

}
