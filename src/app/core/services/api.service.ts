import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ShipEntity} from "../domain/entities/ship.entity";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  rootUrl: string = 'http://localhost:3000/ship/';

  constructor(private http: HttpClient) { }

  getRegistry() {
    return this.http.get<ShipEntity[]>(`${this.rootUrl}`);
  }

}
