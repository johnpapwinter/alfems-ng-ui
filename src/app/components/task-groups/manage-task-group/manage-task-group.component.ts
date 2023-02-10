import {Component, OnInit} from '@angular/core';
import {TaskForceEntity} from "../../../core/domain/entities/task-force.entity";
import {ApiService} from "../../../core/services/api.service";
import {ConfirmationService, MessageService} from "primeng/api";
import {PageDto} from "../../../core/domain/dto/page.dto";
import {ShipEntity} from "../../../core/domain/entities/ship.entity";

@Component({
  selector: 'app-manage-task-group',
  templateUrl: './manage-task-group.component.html',
  styleUrls: ['./manage-task-group.component.css']
})
export class ManageTaskGroupComponent implements OnInit {
  taskForceResults: TaskForceEntity[] = []
  taskForce: TaskForceEntity = {id: '', name: '', ships: []};
  totalCrew = 0;
  totalPass = 0;
  totalFtr = 0;

  first: number = 0;
  rowsPerPage: number = 5;
  page: PageDto = {
    items: [],
    meta: {
      totalItems: 0,
      itemCount: 0,
      itemsPerPage: 0,
      totalPages: 0,
      currentPage: 0,
    }
  }
  unassignedShips: ShipEntity[] = [];
  sortBy: string = 'id';
  sortOrder: number = 1;
  selectedShip: ShipEntity = {
    id: '', hud: '', name: '', type: '', crew: 0, passengers: 0, fighters: 0
  };

  constructor(private apiService: ApiService,
              private messageService: MessageService,
              private confirmationService: ConfirmationService) {
  }

  ngOnInit() {
    this.apiService.findAllTaskForces().subscribe(res => {
      this.taskForceResults = res;
    })
    this.apiService.getAllUnassigned(this.page.meta.currentPage + 1, this.rowsPerPage, this.sortBy, this.sortOrder)
      .subscribe(res => {
        this.unassignedShips = res.items;
      })
  }

  onChoice(event: any) {
    this.totalCrew = 0;
    this.totalPass = 0;
    this.totalFtr = 0;

    this.taskForce.ships.forEach(value => {
      this.totalCrew = this.totalCrew + value.crew;
      this.totalPass = this.totalPass + value.passengers;
      this.totalFtr = this.totalFtr + value.fighters;
    })
  }

  handlePageChange(event: any) {
    this.first = event.first;
    this.rowsPerPage = event.rows;

    this.page.meta.currentPage = Math.floor(this.first / this.rowsPerPage) + 1;
    this.sortBy = event.sortField != undefined ? event.sortField : 'id';
    this.sortOrder = event.sortOrder;

    this.apiService.getAllUnassigned(this.page.meta.currentPage, this.rowsPerPage, this.sortBy, this.sortOrder)
      .subscribe(res => {
        this.page = res;
      })

  }


  onAssign(event: any) {
    this.confirmationService.confirm({
      header: 'Assign Vessel',
      message: `Do you want to assign ${event.data.name} to ${this.taskForce.name}?`,

      accept: () => {
        this.apiService.assignVesselToTaskForce(this.taskForce.id, event.data.id).subscribe(res => {});
        this.messageService.add({ severity: 'success', summary: 'Vessel successfully assigned' });
        window.location.reload();
      },

      reject: () => {
      }

    })
  }

  onUnassign(tfId: string, shipId: string) {
    this.confirmationService.confirm({
      header: 'Unassign Vessel',
      message: 'Are you sure you want to unassign this vessel?',
      icon: 'pi pi-exclamation-circle',

      accept: () => {
        this.apiService.removeVesselFromTaskForce(tfId, shipId).subscribe(res => {});
        this.messageService.add({ severity: 'success', summary: 'Vessel successfully unassigned' });
        window.location.reload();
      },

      reject: () => {
      }
    })
  }

}
