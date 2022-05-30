import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EquiposComponent } from './equipos/equipos.component';
import { EquipoComponent } from './equipo/equipo.component';
import { JugadoresComponent } from './jugadores/jugadores.component';
import { JugadorComponent } from './jugador/jugador.component';

import { HttpClientModule } from "@angular/common/http";

import { ApiService } from './servicio/api.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EquiposComponent,
    EquipoComponent,
    JugadoresComponent,
    JugadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
