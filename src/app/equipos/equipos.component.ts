import { Component, OnInit } from '@angular/core';
import { ApiService } from "../servicio/api.service";

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {
  
  equipos = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getEquipos().subscribe((data) => {
      this.equipos = JSON.parse(JSON.stringify(data.teams));
    })  
  }
}
