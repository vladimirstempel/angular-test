import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { TableRoutingModule } from './table-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    TableRoutingModule,
    SharedModule
  ]
})
export class TableModule { }
