import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { CrudParametrosService } from 'src/app/services/crud-parametros.service';
import { Parametro } from '../../../interfaces/parametro.interface';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar-parametro.component.html',
  styles: [
  ]
})
export class AgregarParametroComponent implements OnInit {

  hayError: boolean = false;

  nuevoParametro: Parametro = {
    codigo: '',
    valor: '',
    descripcion: ''
  }

  constructor(private router: Router,
    private crudParametrosService: CrudParametrosService,
    private messageService: MessageService,
    private activatedRoute: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.crudParametrosService.leerParametrosPorId(id)))
      .subscribe(parametro => this.nuevoParametro = parametro);
  }

  crearParametro(): void {
    console.log(this.nuevoParametro);

    if (this.nuevoParametro.id) {
      this.crudParametrosService.actualizarParametro(this.nuevoParametro.id, this.nuevoParametro)
        .subscribe(resp => {
          this.mensaje('success','Actualización de Parámetro','Se ha actualizado correctamente el parámetro.');
        }, (error => {
          this.errorServidor();
        }));
    } else {
      this.crudParametrosService.crearParametro(this.nuevoParametro)
      .subscribe(resp => {
        this.mensaje('success','Creación de Parámetro','Se ha creado correctamente un nuevo parámetro.');
      }, (error => {
        this.errorServidor();
      }));
    }
    
  }

  regresar() {
    this.router.navigate(['/mantenedores/listadoParametros']);
  }

  errorServidor(){
    this.messageService.add({severity:'error', summary:'Error', detail:'Ha ocurrido un error en el servidor.'});
  }

  mensaje(severity: string, summary: string, detail: string){
    this.messageService.add({severity, summary, detail});
  }


}
