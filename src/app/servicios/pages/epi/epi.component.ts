import { Component, OnInit } from '@angular/core';
import { Mock } from '../../interfaces/mock.interface';
import { MockService } from '../../../services/mock.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-epi',
  templateUrl: './epi.component.html',
  styles: [
  ]
})
export class EpiComponent implements OnInit {

  hayError: boolean = false;
  
  listadoMocks: Mock[] = [];
  
  listadoMocksVacio: boolean = false;

  constructor( private mocksServices: MockService,
    private messageService: MessageService ) { }

  ngOnInit(): void {
    this.mocksServices.getInfoMockPorCliente('EPI')
      .subscribe(mocks => {
        this.listadoMocks = mocks;
        if (this.listadoMocks.length === 0) {
          this.respuestaVacia();
        }
      }, (error => {
        this.hayError = true;
        this.errorServidor();
        console.log(error);
      }))
  }

  errorServidor(){
    this.messageService.add({severity:'error', summary:'Error', detail:'Ha ocurrido un error en el servidor.'});
  }

  respuestaVacia(){
    this.listadoMocksVacio = true;
  }

}
