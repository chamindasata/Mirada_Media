import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RootLibraryComponent } from './root-library/root-library.component'

const routes: Routes = [
  {
    path: '',
    component: RootLibraryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LibraryRoutingModule { }
