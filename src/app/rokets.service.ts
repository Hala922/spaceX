import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoketsService {

  constructor(
    private http: HttpClient
  ) { }

    getHistory() {
      return this.http.get('https://api.spacexdata.com/v3/history');
    }

    getAllRockets() {
      return this.http.get('https://api.spacexdata.com/v3/rockets');
    }

    getPickedRocket(rocket_id) {
        return this.http.get('https://api.spacexdata.com/v3/rockets/' + rocket_id);
    }
    
    getInfo() {
        return this.http.get('https://api.spacexdata.com/v3/info');
    }
}