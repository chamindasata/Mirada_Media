import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirectoryComponent } from './directory/directory.component';
import { DirectoryAddcontactComponent } from './directory-addcontact/directory-addcontact.component';
import { DirectoryEditComponent } from './directory-edit/directory-edit.component';
import { DirectoryAddnewcompanyComponent } from './directory-addnewcompany/directory-addnewcompany.component';
import { DirectoryAddemaillistComponent } from './directory-addemaillist/directory-addemaillist.component';
import { DirectoryUserComponent } from './directory-user/directory-user.component';
import { EditCompanyComponent } from './edit-company/edit-company.component';
import { EditEmailListComponent } from './edit-email-list/edit-email-list.component';

const routes: Routes = [
  {
    path: '',
    component: DirectoryComponent,
    data: {
      title: 'Dashboardg'
    }
  },
  {
    path: 'addnewcontact',
    component: DirectoryAddcontactComponent,
    data: {
      title: 'addnewcontact'
    }
  },
  {
    path: 'editDirectory',
    component: DirectoryEditComponent,
    data: {
      title: 'editDirectory'
    }
  },
  {
    path: 'addnewcompany',
    component: DirectoryAddnewcompanyComponent,
    data: {
      title: 'addnewcompany'
    }
  },
  {
    path: 'addnewemaillist',
    component: DirectoryAddemaillistComponent,
    data: {
      title: 'addnewemaillist'
    }
  },
  {
    path: 'directoryuser',
    component: DirectoryUserComponent,
    data: {
      title: 'directoryuser'
    }
  },
  {
    path: 'editcompany',
    component: EditCompanyComponent,
    data: {
      title: 'editcompany'
    }
  },
  {
    path: 'editemaillist',
    component: EditEmailListComponent,
    data: {
      title: 'editemaillist'
    }
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectoryRoutingModule { }
