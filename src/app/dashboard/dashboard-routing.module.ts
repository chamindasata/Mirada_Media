import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardpannelComponent } from './boardpannel/boardpannel.component';

const routes: Routes = [

   {
    path: '',
    component: BoardpannelComponent,
    data: {
      title: 'Dashboard'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
