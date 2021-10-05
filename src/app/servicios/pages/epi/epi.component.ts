import { Component, OnInit } from '@angular/core';
import { Mock } from '../../interfaces/mock.interface';
import { MockService } from '../../services/mock.service';

@Component({
  selector: 'app-epi',
  templateUrl: './epi.component.html',
  styles: [
  ]
})
export class EpiComponent implements OnInit {

  listadoMocks: Mock[] = [];
  hayError: boolean = false;

  constructor( private mocksServices: MockService ) { }

  ngOnInit(): void {
    this.mocksServices.getMockPorCliente('EPI')
      .subscribe(mocks => {
        this.listadoMocks = mocks;
      }, (error => {
        console.log('Ha ocurrido un error.');
        this.hayError = true;
      }))
  }

}
