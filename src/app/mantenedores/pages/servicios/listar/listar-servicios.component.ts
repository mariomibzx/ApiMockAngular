import { Component, OnInit } from '@angular/core';
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

  constructor( private crudServiciosMockService: CrudServiciosMockService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService ) { }

  ngOnInit(): void {
    this.crudServiciosMockService.leerMocks()
      .subscribe( resp => {
        console.log( resp );
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

  errorServidor(){
    this.messageService.add({severity:'error', summary:'Error', detail:'Ha ocurrido un error en el servidor.'});
  }

  respuestaVacia(){
    this.listadoMocksVacio = true;
  }

  mensaje(severity: string, summary: string, detail: string){
    this.messageService.add({severity, summary, detail});
  }

  confirm() {
    this.confirmationService.confirm({
        message: '¿Está seguro que desea borrar el mock?',
        accept: () => {
          this.mensaje('success','Eliminación de Mock','Se ha borrado correctamente el mock.');
        }
    });
  }

}
