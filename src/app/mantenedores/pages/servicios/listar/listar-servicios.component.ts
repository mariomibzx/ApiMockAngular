import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
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
    private messageService: MessageService ) { }

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

}
