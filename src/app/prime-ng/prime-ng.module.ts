import { NgModule } from '@angular/core';

import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';
import { BreadcrumbModule } from 'primeng/breadcrumb';

@NgModule({
  exports: [
    MenubarModule,
    TableModule,
    ProgressSpinnerModule,
    MessagesModule,
    MessageModule,
    DividerModule,
    ButtonModule,
    DialogModule,
    DynamicDialogModule,
    InputTextareaModule,
    InputTextModule,
    RadioButtonModule,
    DropdownModule,
    CardModule,
    ToastModule,
    BreadcrumbModule
  ]
})
export class PrimeNgModule { }
