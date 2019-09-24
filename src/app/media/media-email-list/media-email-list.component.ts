import { Component, OnInit, ViewChild } from '@angular/core';
import { MediaPlayerService } from 'src/app/service/media-player.service';
import { MediaShareSetup } from 'src/app/entity/mediamail';

import { BsModalService, BsModalRef, ModalDirective } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-media-email-list',
  templateUrl: './media-email-list.component.html',
  styleUrls: ['./media-email-list.component.css']
})
export class MediaEmailListComponent implements OnInit {

  logoImg= "assets/img/logomirada.png";
  pitchImageUrl: string = "https://picsum.photos/id/1014/6016/4000";
  mediaMailTitle: string = "media mail list title";
  mediaMailProjectName: string = "projectName";
  public mediaShareDetail:MediaShareSetup;

isUploadCsvEnable:boolean=false;

  @ViewChild('uploadCsvModal') uploadCsvModal: ModalDirective;


  constructor(public mediaPlayerService: MediaPlayerService) {
  
    this.mediaPlayerService.mediaShareConfiguration$.subscribe(res=>{
      this.mediaShareDetail=res;
    });
 
  }

  ngOnInit() {
    debugger;
    let mediadetails=this.mediaPlayerService.mediaCofigurationList();
    if(mediadetails){
      this.mediaMailTitle = mediadetails.title;
    this.mediaMailProjectName = mediadetails.projectName;
    }
    
  }

  openUploaCsv(){
    this.uploadCsvModal.show();
    this.isUploadCsvEnable=true;
  }
  closeUploaCsv(){
    this.uploadCsvModal.hide();
    this.isUploadCsvEnable=false;
  }

}
