import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ShipEntity} from "../domain/entities/ship.entity";
import {PageDto} from "../domain/dto/page.dto";
import {ShipDto} from "../domain/dto/ship.dto";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  rootUrl: string = 'http://localhost:3000/ship';

  constructor(private http: HttpClient) { }

  getRegistry(page: number, limit: number, sortBy?: string, sortOrder?: number) {
    return this.http.get<PageDto>(`${this.rootUrl}/?page=${page}&limit=${limit}&sortBy=${sortBy}&asc=${sortOrder}`);
  }

  getVesselById(id: string) {
    return this.http.get<ShipEntity>(`${this.rootUrl}/${id}`);
  }

  addVessel(vessel: ShipDto) {
    return this.http.post(`${this.rootUrl}`, vessel);
  }

  editVessel(id: string, vessel: ShipDto) {
    this.http.patch(`${this.rootUrl}/${id}`, vessel).subscribe(res => {});
  }

  deleteVessel(id: string) {
    this.http.delete(`${this.rootUrl}/${id}`).subscribe(res => {});
  }
}
