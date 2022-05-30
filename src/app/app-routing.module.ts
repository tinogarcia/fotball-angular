import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EquiposComponent } from './equipos/equipos.component';
import { EquipoComponent } from './equipo/equipo.component';
import { JugadoresComponent } from './jugadores/jugadores.component';
import { JugadorComponent } from './jugador/jugador.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'equipos', component: EquiposComponent},
  { path: 'equipo/:idTeam', component: EquipoComponent} ,
  { path: 'jugadores', component: JugadoresComponent} ,
  { path: 'jugador/:idJugador', component: JugadorComponent} ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
