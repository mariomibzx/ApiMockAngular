import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ParametrosComponent } from './pages/parametros/parametros.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'parametros',
        component: ParametrosComponent
      },
      {
        path: 'servicios',
        component: ServiciosComponent
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class MantenedoresRoutingModule { }
