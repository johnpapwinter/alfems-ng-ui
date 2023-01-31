import {Component, OnInit} from '@angular/core';
import {ShipEntity} from "../../core/domain/entities/ship.entity";
import {ApiService} from "../../core/services/api.service";
import {PageDto} from "../../core/domain/dto/page.dto";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.css']
})
export class RegistryComponent implements OnInit {
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
  sortBy: string = 'id';
  sortOrder: number = 1;

  constructor(private router: Router,
              private apiService: ApiService) {
  }

  ngOnInit() {
    this.apiService.getRegistry(this.page.meta.currentPage + 1, this.rowsPerPage, this.sortBy, this.sortOrder)
      .subscribe(res => {
      this.page = res;
    })
  }

  loadPage(event: any) {
    this.first = event.first;
    this.rowsPerPage = event.rows;

    this.page.meta.currentPage = Math.floor(this.first / this.rowsPerPage) + 1;
    this.sortBy = event.sortField != undefined ? event.sortField : 'id';
    this.sortOrder = event.sortOrder;

    this.apiService.getRegistry(this.page.meta.currentPage, this.rowsPerPage, this.sortBy, this.sortOrder).subscribe(res => {
      this.page = res;
    })

  }

  onEdit(ship: ShipEntity) {
    this.router.navigate(['edit', ship.id]);
  }

  onDelete(id: string) {
    this.apiService.deleteVessel(id);
    this.router.navigate(['home']);
  }

}
