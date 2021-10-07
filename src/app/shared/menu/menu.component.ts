import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit() {
    this.items = [
      { 
        label: 'Home', 
        icon: 'pi pi-fw pi-home', 
        routerLink: '/' 
      },
      {
        label: 'Servicios Mock', 
        icon: 'pi pi-fw pi-cloud', 
        items: [
          {
            label: 'Zurich Santander',
            icon: 'pi pi-th-large',
            routerLink: '/servicios/zs'
          },
          {
            label: 'Empresa Portuaria Iquique',
            icon: 'pi pi-th-large',
            routerLink: '/servicios/epi'
          }
        ]
      },
      { 
        label: 'Mantenedores', 
        icon: 'pi pi-fw pi-cog', 
        items: [
          {
            label: 'Parámetros',
            icon: 'pi pi-cog',
            items: [
              {
                label: 'Ver / editar Parámetros',
                icon: 'pi pi-pencil',
                routerLink: 'mantenedores/listadoParametros'
              },
              {
                label: 'Agregar Parámetro',
                icon: 'pi pi-plus',
                routerLink: 'mantenedores/agregarParametros'
              }
            ]
          },
          {
            label: 'Servicios',
            icon: 'pi pi-th-large',
            items: [
              {
                label: 'Ver / editar Servicios',
                icon: 'pi pi-pencil',
                routerLink: 'mantenedores/listadoServicios'
              },
              {
                label: 'Agregar Servicios',
                icon: 'pi pi-plus',
                routerLink: 'mantenedores/agregarServicios'
              }
            ]
          }
        ]
      }
    ];
  }

}
