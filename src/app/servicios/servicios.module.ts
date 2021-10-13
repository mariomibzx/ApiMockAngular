import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZsComponent } from './pages/zs/zs.component';
import { EpiComponent } from './pages/epi/epi.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { ServiciosRoutingModule } from './servicios-routing.module';
import { ServiciosTablaComponent } from './components/servicios-tabla/servicios-tabla.component';



@NgModule({
  declarations: [
    ZsComponent,
    EpiComponent,
    ServiciosTablaComponent
    
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    ServiciosRoutingModule
  ]
})
export class ServiciosModule { }
