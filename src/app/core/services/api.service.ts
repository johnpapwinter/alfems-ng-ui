import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ShipEntity} from "../domain/entities/ship.entity";
import {PageDto} from "../domain/dto/page.dto";
import {ShipDto} from "../domain/dto/ship.dto";
import {TaskForceDto} from "../domain/dto/task-force.dto";
import {TaskForceEntity} from "../domain/entities/task-force.entity";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  shipRootUrl: string = 'http://localhost:3000/ship';
  taskGroupRootUrl: string = 'http://localhost:3000/task-force';

  constructor(private http: HttpClient) { }

  getRegistry(page: number, limit: number, sortBy?: string, sortOrder?: number) {
    return this.http.get<PageDto>(`${this.shipRootUrl}/?page=${page}&limit=${limit}&sortBy=${sortBy}&asc=${sortOrder}`);
  }

  getAllVessels() {
    return this.http.get<ShipEntity[]>(`${this.shipRootUrl}/all`);
  }

  getVesselById(id: string) {
    return this.http.get<ShipEntity>(`${this.shipRootUrl}/name/${id}`);
  }

  addVessel(vessel: ShipDto) {
    return this.http.post(`${this.shipRootUrl}`, vessel);
  }

  editVessel(id: string, vessel: ShipDto) {
    this.http.patch(`${this.shipRootUrl}/${id}`, vessel).subscribe(res => {});
  }

  deleteVessel(id: string) {
    this.http.delete(`${this.shipRootUrl}/${id}`).subscribe(res => {});
  }

  getTaskGroupList(page: number, limit: number) {
    return this.http.get<PageDto>(`${this.taskGroupRootUrl}/?page=${page}&limit=${limit}`);
    // return this.http.get<PageDto>(`${this.taskGroupRootUrl}/test/?page=${page}&limit=${limit}`);
  }

  getTaskGroupById(id: string) {
    return this.http.get<TaskForceEntity>(`${this.taskGroupRootUrl}/${id}`);
  }

  addTaskGroup(taskGroup: TaskForceDto) {
    return this.http.post(`${this.taskGroupRootUrl}`, taskGroup);
  }

  editTaskGroup(id: string, taskGroup: TaskForceDto) {
    this.http.patch(`${this.taskGroupRootUrl}/${id}`, taskGroup).subscribe(res => {});
  }

  deleteTaskGroup(id: string) {
    this.http.delete(`${this.taskGroupRootUrl}/${id}`).subscribe(res => {});
  }

  findAllTaskForces() {
    return this.http.get<TaskForceEntity[]>(`${this.taskGroupRootUrl}/all`);
  }

  findTaskForceByName(name: string) {
    return this.http.get<TaskForceEntity>(`${this.taskGroupRootUrl}/name/${name}`)
  }

  getTest(page: number, limit: number) {
    return this.http.get<PageDto>(`${this.taskGroupRootUrl}/test/?page=${page}&limit=${limit}`);
  }
}
