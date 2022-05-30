import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class ApiService {

  private equiposUrl = "https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=Spanish%20La%20Liga";
  private jugadoresUrl = "https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=";
  private jugadorDetailUrl = "https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id="

  constructor(private http: HttpClient) { }

  public getEquipos(): Observable<any> {
    return this.http.get(this.equiposUrl);
  }

  public getJugadores(name: string): Observable<any> {
    const urlSearch = `${this.jugadoresUrl}${name}`;
    return this.http.get(urlSearch);
  }

  public getJugadorDetail(id: string): Observable<any> {
    const urlSearch = `${this.jugadorDetailUrl}${id}`;
    return this.http.get(urlSearch);
  }
}