import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-media-video',
  templateUrl: './media-video.component.html',
  styleUrls: ['./media-video.component.css']
})
export class MediaVideoComponent implements OnInit {

  @Input() details;
  constructor() { }

  ngOnInit() {


  }

  @ViewChild('videoPlayer') videoplayer: ElementRef;

  toggleVideo(event: any) {
    this.videoplayer.nativeElement.play();
  }

}
