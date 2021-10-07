import { Component, Input } from '@angular/core';
import { Mock } from '../../interfaces/mock.interface';
import { MockService } from '../../../services/mock.service';
import { MockResponse } from '../../interfaces/mockResponse.interface';

@Component({
  selector: 'app-servicios-tabla',
  templateUrl: './servicios-tabla.component.html',
  styles: [
  ]
})
export class ServiciosTablaComponent {

  @Input() listadoMocks: Mock[] = [];
  display: boolean = false;
  mockResponse!: MockResponse;
  mockSeleccionado!: Mock;

  constructor(private mocksServices: MockService) { }

  showDialog(mock: Mock): void {
    this.mockSeleccionado = mock;
    console.log(mock.id);
    this.obtenerResponse(mock.id!);
    this.display = true;
  }

  obtenerResponse( id: string ) {
    this.mocksServices.getResponseMockPorId(id)
      .subscribe( resp => {
        console.log(resp);
        this.mockResponse = resp[0];
      })
  }

}
