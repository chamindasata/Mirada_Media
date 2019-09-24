import { SharedModule } from './../share/components/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PreviewTemplateComponent } from './preview-template/preview-template.component';
import { MediaModule } from '../media/media.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PreviewTemplateComponent, LoginComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MediaModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ]
})
export class PagesModule { }
