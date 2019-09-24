import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { RowClassArgs } from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-library-playlist',
  templateUrl: './library-playlist.component.html',
  styleUrls: ['./library-playlist.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class LibraryPlaylistComponent implements OnInit {
  
  public list: any[] = [];
  public folders: string[] = ['folder 001', "folder 002", "folder 003"];
  public gridData: any[];



  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
    this.gridData = [
      {
        "AssetName": "xx-large",
        "mime_content_type": "audio/mpeg",
      },
      {
        "AssetName": "small",
        "mime_content_type": "audio/mpeg",
      }
    ]
  }

  //add strip rows
  public rowCallback(context: RowClassArgs) {
    const isEven = context.index % 2 == 0;
    return {
      even: isEven,
      odd: !isEven
    };
  }

}
