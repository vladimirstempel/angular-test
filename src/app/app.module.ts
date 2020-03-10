import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BlocksModule } from './blocks/blocks.module';
import { TableModule } from './table/table.module';
import { DetailsModule } from './details/details.module';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AuthGuard } from './guards/auth.guard';
import { GuestGuard } from './guards/guest.guard';
import { AuthService } from './services/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    BlocksModule,
    TableModule,
    DetailsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FontAwesomeModule
  ],
  providers: [
    ApiService,
    AuthService,
    AuthGuard,
    GuestGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
