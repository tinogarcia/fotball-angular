import { Component, OnInit } from '@angular/core';
import { ApiService } from "../servicio/api.service";

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})
export class JugadoresComponent implements OnInit {
  
  jugadores = [];
  search: string = '';

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  searchPlayer(search: string){
    this.apiService.getJugadores(search).subscribe((data)=>{
      this.jugadores = JSON.parse(JSON.stringify(data.player));
    })
  }
}
