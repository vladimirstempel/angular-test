import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './components/search/search.component';



@NgModule({
  declarations: [HeaderComponent, SearchComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    FormsModule,
    HeaderComponent,
    SearchComponent
  ]
})
export class SharedModule { }
