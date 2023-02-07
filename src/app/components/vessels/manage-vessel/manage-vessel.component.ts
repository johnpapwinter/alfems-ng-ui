import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../../core/services/api.service";
import {ShipEntity} from "../../../core/domain/entities/ship.entity";
import {TaskForceEntity} from "../../../core/domain/entities/task-force.entity";

@Component({
  selector: 'app-manage-vessel',
  templateUrl: './manage-vessel.component.html',
  styleUrls: ['./manage-vessel.component.css']
})
export class ManageVesselComponent implements OnInit {

  tf: TaskForceEntity = { id: '', name: '', ships: [] }
  vessel: ShipEntity =
    { id: '', hud: '', name: '', type: '', crew: 0, passengers: 0, fighters: 0,
      taskForce: this.tf
    };

  vesselRegistry: ShipEntity[] = [];

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.apiService.getAllVessels().subscribe(res => {
      this.vesselRegistry = res;
    })
  }


}
