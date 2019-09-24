
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'ngx-bootstrap';
import { PaginationModule } from 'ngx-bootstrap';
import { GridModule } from '@progress/kendo-angular-grid';
import { ModalModule, BsModalRef } from 'ngx-bootstrap/modal';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { LibraryRoutingModule } from './library-routing.module';
import { RootLibraryComponent } from './root-library/root-library.component';
import { LibraryGridComponent } from './library-grid/library-grid.component';
import { LibraryFolderComponent } from './library-folder/library-folder.component';
import { LibraryAudioComponent } from './library-modals/library-audio/library-audio.component';
import { LibraryVideoComponent } from './library-modals/library-video/library-video.component';
import { LibraryAssetComponent } from './library-modals/library-asset/library-asset.component';
import { LibraryImageComponent } from './library-modals/library-image/library-image.component';
import { LibraryDocumentComponent } from './library-modals/library-document/library-document.component';
import { LibraryPlaylistComponent } from './library-modals/library-playlist/library-playlist.component';
import {LibraryFolderModalComponent} from './library-modals/library-folder/library-folder.component';
import { ViewAssetModalComponent } from './library-modals/view-asset-modal/view-asset-modal.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { SharedModule } from './../share/components/shared.module';
import { ConfirmModalComponent } from './library-modals/confirm-modal/confirm-modal.component';


@NgModule({
  declarations: [RootLibraryComponent, 
    LibraryGridComponent, 
    LibraryFolderComponent, 
    LibraryAudioComponent, 
    LibraryVideoComponent, 
    LibraryAssetComponent, 
    LibraryImageComponent, 
    LibraryDocumentComponent, 
    LibraryPlaylistComponent, 
    LibraryFolderModalComponent, 
    ViewAssetModalComponent, 
    ConfirmModalComponent],
  imports: [
    CommonModule,
    LibraryRoutingModule,
    TabsModule.forRoot(),
    PaginationModule.forRoot(),
    GridModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    PdfViewerModule,
    SharedModule
  ],
  entryComponents: [
    LibraryAssetComponent,
    LibraryAudioComponent,
    LibraryVideoComponent,
    LibraryImageComponent,
    LibraryDocumentComponent,
    LibraryPlaylistComponent,
    LibraryFolderComponent,
    LibraryFolderModalComponent,
    ViewAssetModalComponent,
    ConfirmModalComponent
  ],
  providers: [
    BsModalRef,]
})
export class LibraryModule { }
