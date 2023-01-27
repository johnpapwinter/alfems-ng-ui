import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ShipEntity} from "../domain/entities/ship.entity";
import {PageDto} from "../domain/dto/page.dto";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  rootUrl: string = 'http://localhost:3000/ship';

  constructor(private http: HttpClient) { }

  getRegistry(page: number, limit: number) {
    return this.http.get<PageDto>(`${this.rootUrl}/?page=${page}&limit=${limit}`);
  }

}
