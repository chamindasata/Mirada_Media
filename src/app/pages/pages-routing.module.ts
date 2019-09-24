import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreviewTemplateComponent } from './preview-template/preview-template.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  {
    path: '',
    component: PreviewTemplateComponent,
    data: {
      title: 'template'
    }
  },
  {
    path: '/:template',
    component: PreviewTemplateComponent,
    data: {
      title: 'template'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'login'
    }
  },
  
  
  
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
