import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Mock } from 'src/app/servicios/interfaces/mock.interface';
import { CrudServiciosMockService } from '../../../../services/crud-servicios-mock.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './listar-servicios.component.html',
  styles: [
  ]
})
export class ListarServiciosComponent implements OnInit {

  hayError: boolean = false;

  listadoMocks: Mock[] = [];

  listadoMocksVacio: boolean = false;

  constructor(private crudServiciosMockService: CrudServiciosMockService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private router: Router) { }

  ngOnInit(): void {
    this.crudServiciosMockService.leerMocks()
      .subscribe(resp => {
        console.log(resp);
        this.listadoMocks = resp;
        if (this.listadoMocks.length === 0) {
          this.respuestaVacia();
        }
      }, (error) => {
        this.hayError = true;
        this.errorServidor();
        console.log(error);

      })
  }

  errorServidor() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Ha ocurrido un error en el servidor.' });
  }

  respuestaVacia() {
    this.listadoMocksVacio = true;
  }

  mensaje(severity: string, summary: string, detail: string) {
    this.messageService.add({ severity, summary, detail });
  }

  borrar(id: string) {
    this.confirmationService.confirm({
      message: '¿Está seguro que desea borrar el mock?',
      accept: () => {
        this.crudServiciosMockService.borrarMock(id)
          .subscribe( resp => {
            this.mensaje('success', 'Eliminación de Mock', 'Se ha borrado correctamente el mock.');
            this.router.navigate(['/mantenedores/listadoServicios']);
          }, (error) => {
            console.log(error);
            this.mensaje('error', 'Eliminación de Mock', 'No se ha sido posible eliminar el mock.');
          }) 
      }
    });
  }

}
