import { Component, OnInit } from '@angular/core';
import { Parametro } from '../../../interfaces/parametro.interface';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CrudParametrosService } from 'src/app/services/crud-parametros.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parametros',
  templateUrl: './listar-parametros.component.html',
  styles: [
  ]
})
export class ListarParametrosComponent implements OnInit {

  hayError: boolean = false;

  listadoParametros: Parametro[] = [];

  listadoParametrosVacio: boolean = false;

  constructor(private crudParametrosService: CrudParametrosService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private router: Router) { }

  ngOnInit(): void {
    this.crudParametrosService.leerParametros()
      .subscribe(resp => {
        console.log(resp);
        this.listadoParametros = resp;
        if (this.listadoParametros.length === 0) {
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
    this.listadoParametrosVacio = true;
  }

  mensaje(severity: string, summary: string, detail: string) {
    this.messageService.add({ severity, summary, detail });
  }

  borrar( id: string ) {
    this.confirmationService.confirm({
      message: '¿Está seguro que desea borrar el parámetro?',
      accept: () => {
        this.crudParametrosService.borrarParametro(id)
          .subscribe( resp => {
            this.mensaje('success', 'Eliminación de Parámetro', 'Se ha borrado correctamente el parámetro.');
            this.router.navigate(['/mantenedores/listadoParametros']);
          }, (error) => {
            console.log(error);
            this.mensaje('error', 'Eliminación de Parámetro', 'No se ha sido posible eliminar el parámtro.');
          })
        
      }
    });
  }

}
