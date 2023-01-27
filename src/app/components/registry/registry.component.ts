import {Component, OnInit} from '@angular/core';
import {ShipEntity} from "../../core/domain/entities/ship.entity";
import {ApiService} from "../../core/services/api.service";
import {PageDto} from "../../core/domain/dto/page.dto";

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

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.apiService.getRegistry(this.page.meta.currentPage, this.rowsPerPage).subscribe(res => {
      this.page = res;
    })
  }

  loadPage(event: any) {
    this.first = event.first;
    this.rowsPerPage = event.rows;

    this.page.meta.currentPage = Math.floor(this.first / this.rowsPerPage) + 1;

    this.apiService.getRegistry(this.page.meta.currentPage, this.rowsPerPage).subscribe(res => {
      this.page = res;
    })

  }

}
