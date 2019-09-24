import { Component, OnInit, Input } from '@angular/core';
import { DetailCollapseEvent } from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-media-image',
  templateUrl: './media-image.component.html',
  styleUrls: ['./media-image.component.css']
})
export class MediaImageComponent implements OnInit {

  @Input() details;

  constructor() { }

  ngOnInit() {
  }

}
