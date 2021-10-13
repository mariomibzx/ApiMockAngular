import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZsComponent } from './pages/zs/zs.component';
import { EpiComponent } from './pages/epi/epi.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'zs',
        component: ZsComponent
      },
      {
        path: 'epi',
        component: EpiComponent
      },
      { path: '**', redirectTo: 'zs' }
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
export class ServiciosRoutingModule { }
