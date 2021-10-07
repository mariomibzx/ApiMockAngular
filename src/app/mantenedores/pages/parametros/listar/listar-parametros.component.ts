import { Component, OnInit } from '@angular/core';
import { Parametro } from '../../../interfaces/parametro.interface';
import { MessageService } from 'primeng/api';
import { CrudParametrosService } from 'src/app/services/crud-parametros.service';

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

  constructor( private crudParametrosService: CrudParametrosService,
    private messageService: MessageService  ) { }

  ngOnInit(): void {
    this.crudParametrosService.leerParametros()
      .subscribe( resp => {
      console.log( resp );
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

  errorServidor(){
    this.messageService.add({severity:'error', summary:'Error', detail:'Ha ocurrido un error en el servidor.'});
  }

  respuestaVacia(){
    this.listadoParametrosVacio = true;
  }

}
