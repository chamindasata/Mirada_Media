import { Component, OnInit, ViewEncapsulation, ViewChild, EventEmitter } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { RowClassArgs } from '@progress/kendo-angular-grid';
import { DataBindingDirective } from '@progress/kendo-angular-grid';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ActivatedRoute} from "@angular/router";

import { LibraryAssetComponent} from '../library-modals/library-asset/library-asset.component';
import { LibraryAudioComponent} from '../library-modals/library-audio/library-audio.component';
import { LibraryVideoComponent} from '../library-modals/library-video/library-video.component';
import { LibraryImageComponent} from '../library-modals/library-image/library-image.component';
import { LibraryDocumentComponent} from '../library-modals/library-document/library-document.component';
import { LibraryFolderModalComponent} from '../library-modals/library-folder/library-folder.component';
import { LibraryPlaylistComponent} from '../library-modals/library-playlist/library-playlist.component';
import { ViewAssetModalComponent } from './../library-modals/view-asset-modal/view-asset-modal.component';

import { LibraryService } from './../../service/library.service';
import { AudioService } from './../../service/audio.service';
import { Asset } from './../../entity/libraray';

import PlayList from '../../../assets/json/playlists.json'
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-root-library',
  templateUrl: './root-library.component.html',
  styleUrls: ['./root-library.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class RootLibraryComponent implements OnInit {

  @ViewChild(DataBindingDirective) dataBinding: DataBindingDirective;

  public tabs = [
    {
      "tabName": "All Files",
      "option": "FILE",
      "icon": 'la la-file',
    },
    {
      "tabName": "Audio",
      "option": "AUDIO",
      "icon": 'la la-music',
    },
    {
      "tabName": "Video",
      "option": "VIDEO",
      "icon": 'la la-file-video-o',
    },
    {
      "tabName": "Images",
      "option": "IMAGE",
      "icon": 'la la-file-image-o',
    },
    {
      "tabName": "Documents",
      "option": "DOCUMENT",
      "icon": 'la la-file-pdf-o',
    },
    {
      "tabName": "Playlist",
      "option": "PLAYLIST",
      "icon": 'la la-folder',
    }
  ]
  data: any = [];
  assets: any = [];
  gridData: any = [];
  tabIcon: any;
  folders: any = [];
  entityAssets: any = [];
  selectedTab: any;
  showBoundaryLinks: boolean = true;
  folderOn: boolean = false;
  tabOn: boolean = false;
  option: string;
  folderId: number;
  isloading: boolean = true;
  isAsstes:boolean=false;
  isSucess: boolean; 

  bsModalRef: BsModalRef;
  assetModal : BsModalRef;

  constructor(private modalService: BsModalService,  
    public libraryService: LibraryService, 
    private route: ActivatedRoute,
    private _audioService: AudioService,
    public toaster: ToastrService) {
    }

  ngOnInit() {
    this.loadRootFolder();
    this.selectedTab = this.tabs[0];

  }

  loadRootFolder() {
    this.isloading = true;
    this.libraryService.getAssetFolders().subscribe(response => {
      this.folders = response;
    },
      error => {
        this.toaster.error("error occued while loading folders.please try again");
      },
      () => {
        this.libraryService.getAssets().subscribe(response => {
          this.entityAssets = response;
        },
          error => {
            this.toaster.error("error occued while loading files.please try again");
          },
          () => {
            this.onSelectTab(this.tabs[0]);
          })
      });
  }


  onSelectTab(tab) {

    this.selectedTab = tab;
    this.tabOn = true;
    this.gridData.splice(0, 1);
    this.option = tab.option;

    switch (tab.tabName) {
      case "All Files":
        this.data = this.folders.concat(this.entityAssets);
        this.assets = this.data.slice(0, 16);
        this.isloading  = false;
        this.tabOn = false;
        break;
      case "Audio":
        this.gridData = this.entityAssets.filter(asset => (asset.mime_content_type.startsWith('audio/')));
        break;
      case "Video":
        this.gridData = this.entityAssets.filter(asset => (asset.mime_content_type.startsWith('video/')));
        break;;
      case "Images":
        this.gridData = this.entityAssets.filter(asset => (asset.mime_content_type.startsWith('image/')));
        break;
      case "Documents":
        this.gridData = this.entityAssets.filter(asset => (asset.mime_content_type === 'application/pdf'));
        break;
      case "Playlist":
        this.data = PlayList;
        this.assets = this.data.slice(0, 16);
        this.tabOn = false;
      default:
        break;
    }
  }

  public pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.assets = this.data.slice(startItem, endItem);
  }

  //add strip rows
  public rowCallback(context: RowClassArgs) {
    const isEven = context.index % 2 == 0;
    return {
      even: isEven,
      odd: !isEven
    };
  }

  viewFolder(assetId: number) {
    this.folderOn = !this.folderOn;
    this.folderId = assetId;
  }

  openNewAssetModal() {
    switch (this.selectedTab.tabName) {
      case "All Files": {
        this.bsModalRef = this.modalService.show(LibraryAssetComponent, { class: 'modal-lg' });
        this.bsModalRef.content.onClose.subscribe(result => {
          if(result) {
            this.loadRootFolder();
          }
      })
        break;
      }
      case "Audio": {
        this.bsModalRef = this.modalService.show(LibraryAudioComponent, { class: 'modal-lg' });
        break;
      }
      case "Video": {
        this.bsModalRef = this.modalService.show(LibraryVideoComponent, { class: 'modal-lg' });
        break;
      }
      case "Images": {
        this.bsModalRef = this.modalService.show(LibraryImageComponent, { class: 'modal-lg' });
        break;
      }
      case "Documents": {
        this.bsModalRef = this.modalService.show(LibraryDocumentComponent, { class: 'modal-lg' });
        break;
      }
      case "Playlist": {
        this.bsModalRef = this.modalService.show(LibraryPlaylistComponent, { class: 'modal-lg' });
        break;
      }
      default: {
        //statements; 
        break;
      }
    }

  }

  openNewFolderModal () {
    this.bsModalRef = this.modalService.show(LibraryFolderModalComponent);

    this.bsModalRef.content.isNewFolder.subscribe(result => {
      if(result) {
        this.isloading = true;
        this.loadRootFolder();
      }
  })
  }

  displayAsset(asset: Asset) {
    const initialState = {
      title: asset.AssetName,
      viewUrl: asset.viewUrl,
      type:asset.mime_content_type
    };

    this.assetModal = this.modalService.show(ViewAssetModalComponent, { initialState, class: 'modal-lg'});
  }

  playAudio(asset: Asset) {
    let song= {name: asset.AssetName, id: 0 , uri: asset.viewUrl};
    this._audioService.playSong(song)
  }

  hideThisChild (data) {
    this.folderOn = !this.folderOn;
    this.loadRootFolder();
  }

}
