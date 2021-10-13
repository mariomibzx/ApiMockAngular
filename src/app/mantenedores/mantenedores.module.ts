import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { MantenedoresRoutingModule } from './mantenedores-routing.module';

import { ListarParametrosComponent } from './pages/parametros/listar/listar-parametros.component';
import { ListarServiciosComponent } from './pages/servicios/listar/listar-servicios.component';
import { AgregarParametroComponent } from './pages/parametros/agregar/agregar-parametro.component';
import { AgregarServicioComponent } from './pages/servicios/agregar/agregar-servicio.component';
import { ConfirmationService } from 'primeng/api';





@NgModule({
  declarations: [
    ListarParametrosComponent,
    ListarServiciosComponent,
    AgregarParametroComponent,
    AgregarServicioComponent
  ],
  imports: [
    CommonModule,
    MantenedoresRoutingModule,
    PrimeNgModule,
    FormsModule
  ],
  providers: [
    ConfirmationService
  ]
})
export class MantenedoresModule { }
