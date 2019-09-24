// import { AuthInterceptor } from './service/auth.interceptor';
import { BrowserModule } from '@angular/platform-browser';


import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminlayoutComponent } from './layouts/adminlayout.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AudioplayerComponent } from './audioplayer/audioplayer.component';
//import { DirectoryComponent } from './directory/directory/directory.component';

import { MatSliderModule,
  MatButtonModule,
  MatListModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule } from '@angular/material';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PagelayoutComponent } from './layouts/pagelayout/pagelayout.component';
import { HttpConfigInterceptor } from './interceptor/httpconfig.interceptor';
import { ModalModule, BsModalRef } from 'ngx-bootstrap/modal';
import { MillitosecoundPipe } from './share/millitosecound.pipe';

import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    MatButtonModule,
    MatListModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    BrowserAnimationsModule,HttpClientModule,
    GridModule,
    ModalModule.forRoot(),
    PdfViewerModule,
    ToastrModule.forRoot()
    
  ],
  declarations: [
    AppComponent,
    AdminlayoutComponent,
    AudioplayerComponent,
    PagelayoutComponent,
    MillitosecoundPipe,
    //SDirectoryComponent
  ],
  exports: [
    MillitosecoundPipe,
 
    ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
      
    },
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true },
    BsModalRef

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
