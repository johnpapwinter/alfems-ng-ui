import {Component, OnInit} from '@angular/core';
import { saveAs } from "file-saver";
import {PageDto} from "../../../core/domain/dto/page.dto";
import {Router} from "@angular/router";
import {ApiService} from "../../../core/services/api.service";
import {ConfirmationService, MessageService} from "primeng/api";
import {TaskForceEntity} from "../../../core/domain/entities/task-force.entity";
import {AuthService} from "../../../core/services/auth.service";

@Component({
  selector: 'app-task-group-list',
  templateUrl: './task-group-list.component.html',
  styleUrls: ['./task-group-list.component.css']
})
export class TaskGroupListComponent implements OnInit{
  first: number = 0;
  rowsPerPage: number = 3;
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

  constructor(private router: Router,
              private apiService: ApiService,
              public authService: AuthService,
              private confirmationService: ConfirmationService,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.apiService.getTaskGroupList(this.page.meta.currentPage + 1, this.rowsPerPage)
      .subscribe(res => {
        this.page = res;
      })
  }

  loadPage(event: any) {
    this.first = event.first;
    this.rowsPerPage = event.rows;

    this.page.meta.currentPage = Math.floor(this.first / this.rowsPerPage) + 1;

    this.apiService.getTaskGroupList(this.page.meta.currentPage, this.rowsPerPage)
      .subscribe(res => {
        this.page = res;
      })
  }

  onEdit(taskGroup: TaskForceEntity) {
    this.router.navigate(['edit-task-group', taskGroup.id]);
  }

  onDelete(id: string) {
    this.confirmationService.confirm({
      header: 'Delete Task Group',
      message: `Are you sure you want to delete this task group?`,
      icon: 'pi pi-exclamation-circle',

      accept: () => {
        this.apiService.deleteTaskGroup(id);
        this.messageService.add({ severity: 'success', summary: 'The task group was deleted' });
        window.location.reload();
      },

      reject: () => {
      }
    })
  }

  onRemoveShip(id: string) {
    this.confirmationService.confirm({
      header: 'Unassign Vessel from Task Group',
      message: `Are you sure you want to unassign this vessel?`,
      icon: 'pi pi-exclamation-circle',

      accept: () => {
        this.messageService.add({ severity: 'success', summary: 'The vessel was unassigned' });
      },

      reject: () => {
      }
    })
  }

  onExportTaskForce(id: string) {
    this.apiService.exportTaskForceToExcel(id).subscribe(
      res => {
        let filename = res.headers.get('Content-Disposition')?.split('filename')[1].split('=')[1]
          .trim().replace(/"/g, "");

        saveAs(res?.body!, filename);
      }
    )
  }

}
