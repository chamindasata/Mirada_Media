import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MediaPlayerService } from 'src/app/service/media-player.service';

@Component({
  selector: 'app-media-configure-setup',
  templateUrl: './media-configure-setup.component.html',
  styleUrls: ['./media-configure-setup.component.css']
})
export class MediaConfigureSetupComponent implements OnInit {

  // @Output() updatedForm: EventEmitter<any> = new EventEmitter();

  public mediaConfigureForm=new FormGroup({
    isPublic:new FormControl(),
    title:new FormControl(),
    projectName:new FormControl(),
    artistName:new FormControl(),
    theme:new FormControl("")


  });


  constructor(public mediaPlayerService:MediaPlayerService) { }

  ngOnInit() {
  }


  save(values){
console.log(values);
  }

  updateValue(){
   console.log(this.mediaConfigureForm.value) ;
  //  this.updatedForm.emit(this.mediaConfigureForm.value);
  this.mediaPlayerService.mediaConfigure(this.mediaConfigureForm.value)

  }

}
