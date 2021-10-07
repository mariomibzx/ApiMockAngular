import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { CrudParametrosService } from 'src/app/services/crud-parametros.service';
import { Parametro } from '../../../interfaces/parametro.interface';

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
    private messageService: MessageService
    ) { }

  ngOnInit(): void {
  }

  crearParametro(): void {
    console.log(this.nuevoParametro);
    this.crudParametrosService.crearParametro(this.nuevoParametro)
      .subscribe(resp => {
        this.messageService.add({severity:'success', summary:'Creación de Parámetro', detail:'Se ha creado correctamente un nuevo parámetro.'});
      }, (error => {
        this.errorServidor();
      }));
  }

  regresar() {
    this.router.navigate(['/mantenedores/listadoParametros']);
  }

  errorServidor(){
    this.messageService.add({severity:'error', summary:'Error', detail:'Ha ocurrido un error en el servidor.'});
  }


}
