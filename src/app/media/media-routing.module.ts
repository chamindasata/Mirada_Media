
import { MediaManagePageComponent } from './media-manage-page/media-manage-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MediaGridComponent } from './media-grid/media-grid.component';
import { MediaUploadCsvComponent } from './media-upload-csv/media-upload-csv.component';


const routes: Routes = [
  {
    path: '',
    component: MediaManagePageComponent,
    data: {
      title: 'Dashboard'
    }
  },
  {
    path: 'medialist',
    component: MediaGridComponent,
    data: {
      title: 'media list'
    }
  },
  {
    path: 'mediaupload',
    component: MediaUploadCsvComponent,
    data: {
      title: 'media csv upload'
    }
  }
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MediaRoutingModule { }
