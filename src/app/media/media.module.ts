import { SharedModule } from './../share/components/shared.module';

import { MediaLineupComponent } from './mediacomponents/media-lineup/media-lineup.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediaRoutingModule } from './media-routing.module';
import { MediaManagePageComponent } from './media-manage-page/media-manage-page.component';
import { MediaSocialSetupComponent } from './media-social-setup/media-social-setup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MediaShareSetupComponent } from './media-share-setup/media-share-setup.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { MediaConfigureSetupComponent } from './media-configure-setup/media-configure-setup.component';
import { MediaMailTemplateComponent } from './media-mail-template/media-mail-template.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { MediaTextComponent } from './mediacomponents/media-text/media-text.component';
import { MediaTextConfigurationComponent } from './mediacomponents/media-text-configuration/media-text-configuration.component';
import { MediaAudioComponent } from './mediacomponents/media-audio/media-audio.component';
import { MediaAudioConfigurationComponent } from './mediacomponents/media-audio-configuration/media-audio-configuration.component';
import { HttpClientModule } from '@angular/common/http';

import { AngularEditorModule } from '@kolkov/angular-editor';
import { GridModule } from '@progress/kendo-angular-grid';
import { MediaVideoComponent } from './mediacomponents/media-video/media-video.component';
import { MediaVideoConfigurationComponent } from './mediacomponents/media-video-configuration/media-video-configuration.component';
import { MediaImageComponent } from './mediacomponents/media-image/media-image.component';
import { MediaImageConfigurationComponent } from './mediacomponents/media-image-configuration/media-image-configuration.component';

import { MediaDummyComponent } from './mediacomponents/media-dummy/media-dummy.component';
import { MediaEmailListComponent } from './media-email-list/media-email-list.component';
import { MediaGridComponent } from './media-grid/media-grid.component';
import { MediaUploadCsvComponent } from './media-upload-csv/media-upload-csv.component';
import { DragDropDirective } from '../share/drag-drop.directive';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { MediaMailPreviewComponent } from './media-mail-preview/media-mail-preview.component';
import { LoaderComponent } from '../share/components/loader/loader.component';



@NgModule({
   imports: [
    CommonModule,
    MediaRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    OwlDateTimeModule, 
    OwlNativeDateTimeModule,
    ModalModule.forRoot(),
    AngularEditorModule,
    HttpClientModule,
    GridModule,
    DragDropModule,SharedModule
   
    
    
  ],
  declarations: [MediaManagePageComponent, MediaSocialSetupComponent, MediaShareSetupComponent, MediaConfigureSetupComponent, DragDropDirective, 
    MediaMailTemplateComponent, MediaTextComponent, MediaTextConfigurationComponent, MediaAudioComponent, MediaAudioConfigurationComponent, MediaVideoComponent, MediaVideoConfigurationComponent, MediaImageComponent, MediaImageConfigurationComponent, MediaDummyComponent, MediaEmailListComponent, MediaLineupComponent, MediaGridComponent, MediaUploadCsvComponent, MediaMailPreviewComponent],

  entryComponents: [MediaTextComponent,MediaTextConfigurationComponent,MediaAudioComponent,MediaAudioConfigurationComponent,MediaVideoComponent, MediaVideoConfigurationComponent,MediaImageComponent, MediaImageConfigurationComponent , MediaLineupComponent],
  exports: [ MediaTextComponent ,MediaTextConfigurationComponent,MediaAudioComponent,MediaAudioConfigurationComponent,MediaVideoComponent, MediaVideoConfigurationComponent, MediaImageComponent, MediaImageConfigurationComponent, MediaLineupComponent,MediaMailPreviewComponent]
})

export class MediaModule { }
