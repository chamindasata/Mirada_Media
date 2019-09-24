import { Component, OnInit, Input } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-media-audio',
  templateUrl: './media-audio.component.html',
  styleUrls: ['./media-audio.component.css']
})
export class MediaAudioComponent implements OnInit {
  @Input() details;
  constructor() { }

  ngOnChanges() {
   
    
  }

  ngOnInit() {
  }



 

  drop(event: CdkDragDrop< string[]>) {

    moveItemInArray(this.details.audioDetail, event.previousIndex, event.currentIndex);
  }

}
