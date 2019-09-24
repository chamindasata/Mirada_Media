import { Component, OnInit, ViewChild } from '@angular/core';
import { MediaConfigureSetupComponent } from '../media-configure-setup/media-configure-setup.component';
import { MediaMailConfig, MediaTemplateCategorySections } from 'src/app/_helpers/common.enum';
import { MediaMailSetup, mediaMailTemplateItems } from 'src/app/entity/mediamail';
import { MediaPlayerService } from 'src/app/service/media-player.service';
import { MediaMailTemplateComponent } from '../media-mail-template/media-mail-template.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-media-manage-page',
  templateUrl: './media-manage-page.component.html',
  styleUrls: ['./media-manage-page.component.css']
})
export class MediaManagePageComponent implements OnInit {

@ViewChild(MediaMailTemplateComponent)  MediaTemplate;

  mediaMailConfig = MediaMailConfig;

  isEnableConfigure: boolean = true;
  isEnableSocial: boolean = false;
  isEnableShare: boolean = false;
 previewUrl:any;

  isEditComponent:boolean=true;
  mailpreview:mediaMailTemplateItems;
  // mediaMailTemplateValue:MediaMailSetup=new Object();;

// isConfiguration:boolean=true;
isMediaComponent:boolean=false;
public selectedSetupComponent:any;

public queryparam:any;



  constructor(public mediaPlayerService:MediaPlayerService,public router :Router) { 
    
    this.mediaPlayerService.templateConfiguration$.subscribe(
      item => {
        this.selectedSetupComponent=item.componentName;
        this.isMediaComponent=item.isConfigEnale;
      }
    )
   

    
  }

  ngOnInit() {
    this.previewUrl=location.origin+'/page;'+this.queryparam;
    
  }


  configureScreenchange(){
    this.isMediaComponent=false;
  }

  disableAllScreen() {
    this.isEnableConfigure = false;
    this.isEnableSocial = false;
    this.isEnableShare = false;
  }



  changeSetUp(section) {
    this.disableAllScreen();
    switch (section) {

      case MediaMailConfig.ConfigureSetup: {
        //statements; 

        this.isEnableConfigure = true;
        this.isEditComponent=true;
        break;
      }
      case MediaMailConfig.SocialSetup: {
        //statements; 
        this.isEnableSocial = true;
       this.isEditComponent=false;
        break;
      }
      case MediaMailConfig.ShareSetup: {
        //statements; 
        this.isEnableShare = true;
        break;
      }
      default: {
        //statements; 
        break;
      }
    }

  }


//   mediaConfigure(event){
// // console.log(event);

// this.mediaMailTemplateValue.mediaConfigureSetup=event;

// console.log(this.mediaMailTemplateValue);
//   }

getViewData(){

// let  preview=new Object();
this.mailpreview = {
  mediaConfigureSetup:this.MediaTemplate.mediaConfigureSetup,
  mediaSocialSetup:this.MediaTemplate.mediaSocialSetup,
  templateComponents:this.MediaTemplate.screenInfomations,
}
 
   this.queryparam=JSON.stringify(this.mailpreview)


   this.previewUrl=location.origin+'/#/page;template='+this.queryparam;
    // this.previewUrl=encodeURI(location.origin+'/#/page;template='+this.queryparam);
  // this.router.navigate(['page', {template: this.queryparam}]);

  this.router.navigate([]).then(result => {  window.open(  this.previewUrl, '_blank'); });

// console.log(location.origin);

//  console.log(this.router.url);
}

}
