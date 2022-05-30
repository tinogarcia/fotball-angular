import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from "../servicio/api.service";

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {

  id: any;
  equipos = [];
  equipo: any;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('idTeam');
    this.apiService.getEquipos().subscribe((data) => {
      this.equipos = JSON.parse(JSON.stringify(data.teams));
      this.equipo = this.equipos.find(equipo => equipo['idTeam'] === this.id);
    });
  }
}
