import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { NgbNavModule, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [HeaderComponent, SearchComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgbNavModule,
    ToastrModule.forRoot()
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HeaderComponent,
    SearchComponent,
    NgbNavModule,
    ToastrModule
  ]
})
export class SharedModule { }
