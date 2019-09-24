import { MediaShareSetup } from './../../entity/mediamail';
import { MediaPlayerService } from './../../service/media-player.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-share-setup',
  templateUrl: './media-share-setup.component.html',
  styleUrls: ['./media-share-setup.component.css']
})
export class MediaShareSetupComponent implements OnInit {

  selectedUploadImage:File=null;
  emailText:any="";
  constructor(public MediaPlayerService:MediaPlayerService) { }
  mediaShareform=new FormGroup({
    sendDate:new FormControl(),
    deactivate:new FormControl(),
    From:new FormControl(),
    Subject:new FormControl(),
    emailSignature:new FormControl()
    // emailText:new FormControl()

  });

  ngOnInit() {
  }
  // mediaShareConfigure

  save(value){
    // const imgUpload=new FormData();
    // imgUpload.append('image',this.selectedUploadImage,this.selectedUploadImage.name);

    console.log(value);
  }

  onFileUpload(event){
    // console.log(event);
    this.selectedUploadImage=<File>event.target.files[0];
  }

  emitService(){
  
    let mediaShareDetails:MediaShareSetup=this.mediaShareform.value;
  mediaShareDetails.emailText=this.emailText;
  
    this.MediaPlayerService.mediaShareConfigure(this.mediaShareform.value);
  
  }


}
