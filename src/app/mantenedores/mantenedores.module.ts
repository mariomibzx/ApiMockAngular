import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { ParametrosComponent } from './pages/parametros/parametros.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { MantenedoresRoutingModule } from './mantenedores-routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    ParametrosComponent,
    ServiciosComponent
  ],
  imports: [
    CommonModule,
    MantenedoresRoutingModule
  ]
})
export class MantenedoresModule { }
