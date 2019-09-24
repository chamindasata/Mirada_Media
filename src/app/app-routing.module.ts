
import { AdminlayoutComponent } from './layouts/adminlayout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagelayoutComponent } from './layouts/pagelayout/pagelayout.component';
import { Authguard } from './share/guards/authguard.service';

const routes: Routes = [
  { path: '', redirectTo: 'page/login', pathMatch: 'full' },
  // { path: '', component: AdminlayoutComponent, pathMatch: 'full' },
  {
    path: '', component: AdminlayoutComponent,  canActivate: [Authguard], data: { title: 'Home' },
    children: [
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'media',
        loadChildren: './media/media.module#MediaModule'
      },
      {
        path: 'directory',
        loadChildren: './directory/directory.module#DirectoryModule'
      },
      {
        path: 'library',
        loadChildren: './library/library.module#LibraryModule'
      },
      
    ]
  },
  {
    path: '', component:PagelayoutComponent , data: { title: 'pages' },
    children: [
      {
        path: 'page',
        loadChildren: './pages/pages.module#PagesModule'
      },
    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
