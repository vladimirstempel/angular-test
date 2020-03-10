import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlocksComponent } from './blocks.component';
import { BlocksRoutingModule } from './blocks-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [BlocksComponent],
  imports: [
    CommonModule,
    BlocksRoutingModule,
    SharedModule
  ]
})
export class BlocksModule { }
