import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from "../servicio/api.service";

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.css']
})
export class JugadorComponent implements OnInit {

  id: any;
  jugador: any;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('idJugador');
    this.apiService.getJugadorDetail(this.id).subscribe((data) => {
      this.jugador = JSON.parse(JSON.stringify(data.players[0]));
    });
  }

}
