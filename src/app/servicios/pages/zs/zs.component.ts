import { Component, OnInit } from '@angular/core';
import { Mock } from '../../interfaces/mock.interface';
import { MockService } from '../../../services/mock.service';

@Component({
  selector: 'app-zs',
  templateUrl: './zs.component.html',
  styles: [
  ]
})
export class ZsComponent implements OnInit {

  listadoMocks: Mock[] = [];
  hayError: boolean = false;


  constructor(private mocksServices: MockService) { }

  ngOnInit(): void {
    this.mocksServices.getInfoMockPorCliente('ZS')
      .subscribe(mocks => {
        this.listadoMocks = mocks;
      }, error => {
        console.log('Ha ocurrido un error.');
        this.hayError = true;
      })
  }

}
