import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectoryRoutingModule } from './directory-routing.module';
import { DirectoryComponent } from './directory/directory.component';
import { DirectoryGridComponent } from './directory-grid/directory-grid.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { DirectoryAddcontactComponent } from './directory-addcontact/directory-addcontact.component';
import { DirectoryEditComponent } from './directory-edit/directory-edit.component';
import { DirectoryAddnewcompanyComponent } from './directory-addnewcompany/directory-addnewcompany.component';
import { DirectoryAddemaillistComponent } from './directory-addemaillist/directory-addemaillist.component';

import { HttpClientModule } from '@angular/common/http';
import { DirectoryUserComponent } from './directory-user/directory-user.component';
import { EditCompanyComponent } from './edit-company/edit-company.component';
import { EditEmailListComponent } from './edit-email-list/edit-email-list.component';
import { ModalModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    DirectoryComponent, 
    DirectoryGridComponent, 
    DirectoryAddcontactComponent, 
    DirectoryEditComponent, 
    DirectoryAddnewcompanyComponent, 
    DirectoryAddemaillistComponent, 
    DirectoryUserComponent, EditCompanyComponent, EditEmailListComponent
  ],
  imports: [
    CommonModule,
    GridModule,
    DirectoryRoutingModule,
    HttpClientModule,
    ModalModule.forRoot()
  ]
})
export class DirectoryModule { }
