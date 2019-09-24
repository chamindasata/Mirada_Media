import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-media-text',
  templateUrl: './media-text.component.html',
  styleUrls: ['./media-text.component.css']
})
export class MediaTextComponent implements OnInit {

@Input() details;
  constructor() { }

  ngOnInit() {
  
  }

}
