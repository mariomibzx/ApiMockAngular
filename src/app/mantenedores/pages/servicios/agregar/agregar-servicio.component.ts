import { Component, OnInit } from '@angular/core';
import { Mock } from '../../../../servicios/interfaces/mock.interface';
import { TipoMock } from '../../../interfaces/tipo.interface';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/mantenedores/interfaces/cliente.interface';


@Component({
  selector: 'app-agregar-servicio',
  templateUrl: './agregar-servicio.component.html',
  styles: [
  ]
})
export class AgregarServicioComponent implements OnInit {

  hayError: boolean = false;

  tipo: TipoMock[];
  clientes: Cliente[] = [];

  nuevoMock: Mock = {
    ruta_servicio: '',
    aplicativo_cliente: '',
    tipo: 'REST',
    servicio: '',
    cliente: 'ZS',
    aplicativo_host: '',
    response: ''
  }

  constructor( private router: Router ) {
    this.tipo = [
      { name: 'REST', code: 'REST'},
      { name: 'SOAP', code: 'SOAP'}
    ];

    this.clientes = [
      { code: 'EPI', name: 'Empresa Portuaria Iquique'},
      { code: 'ZS', name: 'Zurich Santander'}
    ]
  }

  ngOnInit(): void {
  }

  guardar() {
    console.log(this.nuevoMock);
  }

  regresar(){
    this.router.navigate(['/mantenedores/listadoServicios']);
  }

}
