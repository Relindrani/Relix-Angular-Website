import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from './employee';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  //private _url: string = "/assets/data/employees.json"
  //private _url: string = "https://cors-anywhere.herokuapp.com/http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=8BCD4971534B22531611F207DEA0FD47&steamid=76561198067155644&include_appinfo=true&include_played_free_games=true&format=json" //My steam profile
  private _url: string = "https://cors-anywhere.herokuapp.com/http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=8BCD4971534B22531611F207DEA0FD47&steamid=76561197960434622&include_appinfo=true&include_played_free_games=true&format=json" //Test steam profile (more games)


  constructor(private http: HttpClient) { }

  async getEmployees(): Promise<Employee[]>{
    return await this.http.get<Employee[]>(this._url, httpOptions).toPromise();
  }
}
