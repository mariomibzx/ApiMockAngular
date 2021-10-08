import { Component, OnInit } from '@angular/core';
import { Mock } from '../../../../servicios/interfaces/mock.interface';
import { TipoMock } from '../../../interfaces/tipo.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/mantenedores/interfaces/cliente.interface';
import { MessageService } from 'primeng/api';
import { CrudServiciosMockService } from '../../../../services/crud-servicios-mock.service';
import { switchMap } from 'rxjs/operators';


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

  constructor( private router: Router,
    private crudServiciosMockService: CrudServiciosMockService,
    private messageService: MessageService,
    private activatedRoute: ActivatedRoute ) {

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
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.crudServiciosMockService.leerMocksPorId(id)))
      .subscribe( nuevoMock => this.nuevoMock = nuevoMock );
  }

  guardar() {
    console.log(this.nuevoMock);

    if (this.nuevoMock.id) {
      this.crudServiciosMockService.actualizarMock(this.nuevoMock.id, this.nuevoMock)
        .subscribe(resp => {
          this.mensaje('success','Actualización de Servicio','Se ha actualizado correctamente el servicio.');
        }, (error => {
          this.errorServidor();
        }));
    } else {
      this.crudServiciosMockService.crearMock(this.nuevoMock)
      .subscribe(resp => {
        this.mensaje('success','Creación de Servicio','Se ha creado correctamente un nuevo servicio.');
      }, (error => {
        this.errorServidor();
      }));
    }
  }

  regresar(){
    this.router.navigate(['/mantenedores/listadoServicios']);
  }

  errorServidor(){
    this.messageService.add({severity:'error', summary:'Error', detail:'Ha ocurrido un error en el servidor.'});
  }

  mensaje(severity: string, summary: string, detail: string){
    this.messageService.add({severity, summary, detail});
  }

}
