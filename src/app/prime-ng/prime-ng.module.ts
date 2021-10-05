import { NgModule } from '@angular/core';

import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  exports: [
    MenubarModule,
    TableModule,
    ProgressSpinnerModule,
    MessagesModule,
    MessageModule,
    DividerModule,
    ButtonModule,
    DialogModule
    
  ]
})
export class PrimeNgModule { }
