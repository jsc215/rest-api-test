import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get('/api/users');
  }

  getStocks() {
    return this.http.get('api/stocks');
  }

  getRandom(sector) {}
}
