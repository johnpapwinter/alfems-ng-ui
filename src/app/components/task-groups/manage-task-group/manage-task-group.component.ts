import {Component, OnInit} from '@angular/core';
import {TaskForceEntity} from "../../../core/domain/entities/task-force.entity";
import {ApiService} from "../../../core/services/api.service";

@Component({
  selector: 'app-manage-task-group',
  templateUrl: './manage-task-group.component.html',
  styleUrls: ['./manage-task-group.component.css']
})
export class ManageTaskGroupComponent implements OnInit {
  taskForceName: string = ''
  results: TaskForceEntity[] = []
  checks: string[] = []
  taskForce: TaskForceEntity = {id: '', name: '', ships: []};
  totalCrew = 0;
  totalPass = 0;
  totalFtr = 0;

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.apiService.findAllTaskForces().subscribe(res => {
      this.results = res;
    })
  }

  search(event: any) {
    this.apiService.findAllTaskForces().subscribe(res => {
      this.checks = res.map(value => value.name);
    })
  }

  onChoice() {
    this.apiService.findTaskForceByName(this.taskForceName).subscribe(res => {
      this.taskForce = res;
      this.taskForce.ships.forEach(value => {
        this.totalCrew = this.totalCrew + value.crew;
        this.totalPass = this.totalPass + value.passengers;
        this.totalFtr = this.totalFtr + value.fighters;
      })
    })
  }

  onAdd() {
    console.log('Add vessel to task force')
  }

}
