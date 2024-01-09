import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel'
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
// import { MenuModule } from 'primeng/menu';


@NgModule({
  exports: [
    // MenuModule,
    ButtonModule,
    CardModule,
    FieldsetModule,
    MenubarModule,
    PanelModule,
    TableModule,
    ToolbarModule,
  ]
})
export class PrimeNgModule { }
