import { Component, Input } from '@angular/core';
import { Mock } from '../../interfaces/mock.interface';

@Component({
  selector: 'app-servicios-tabla',
  templateUrl: './servicios-tabla.component.html',
  styles: [
  ]
})
export class ServiciosTablaComponent {

  @Input() listadoMocks: Mock[] = [];
  display: boolean = false;

  constructor() { }

  showDialog() {
    this.display = true;
}

}
