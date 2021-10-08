import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListarParametrosComponent } from './pages/parametros/listar/listar-parametros.component';
import { ListarServiciosComponent } from './pages/servicios/listar/listar-servicios.component';
import { AgregarParametroComponent } from './pages/parametros/agregar/agregar-parametro.component';
import { AgregarServicioComponent } from './pages/servicios/agregar/agregar-servicio.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'listadoParametros',
        component: ListarParametrosComponent
      },
      {
        path: 'agregarParametros',
        component: AgregarParametroComponent
      },
      {
        path: 'editarParametros/:id',
        component: AgregarParametroComponent
      },
      {
        path: 'listadoServicios',
        component: ListarServiciosComponent
      },
      {
        path: 'editarServicios/:id',
        component: AgregarServicioComponent
      },
      {
        path: 'agregarServicios',
        component: AgregarServicioComponent
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
