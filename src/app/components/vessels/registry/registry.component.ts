import {Component, OnInit} from '@angular/core';
import {ShipEntity} from "../../../core/domain/entities/ship.entity";
import {ApiService} from "../../../core/services/api.service";
import {PageDto} from "../../../core/domain/dto/page.dto";
import {Router} from "@angular/router";
import {ConfirmationService, MessageService} from "primeng/api";
import {SearchDto} from "../../../core/domain/dto/search.dto";
import {FormControl, FormGroup} from "@angular/forms";

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
  fieldName: string | null = null;
  fieldType: string | null = null;
  fieldFtr: string | null = null;
  searchDto: SearchDto = {
    name: this.fieldName,
    type: this.fieldType,
    fighters: null,
  }


  constructor(private router: Router,
              private apiService: ApiService,
              private confirmationService: ConfirmationService,
              private messageService: MessageService) {
  }

  ngOnInit() {
    // this.apiService.getRegistry(this.page.meta.currentPage + 1, this.rowsPerPage, this.sortBy, this.sortOrder)
    //   .subscribe(res => {
    //   this.page = res;
    // })

    this.apiService.searchVessels(this.searchDto, this.page.meta.currentPage + 1, this.rowsPerPage, this.sortBy, this.sortOrder)
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

    // this.apiService.getRegistry(this.page.meta.currentPage, this.rowsPerPage, this.sortBy, this.sortOrder)
    //   .subscribe(res => {
    //   this.page = res;
    // })
    this.apiService.searchVessels(this.searchDto, this.page.meta.currentPage, this.rowsPerPage, this.sortBy, this.sortOrder)
      .subscribe(res => {
        this.page = res;
      })

  }

  onSearch() {
    this.searchDto.name = this.fieldName;
    this.searchDto.type = this.fieldType;
    if (this.fieldFtr !== null) {
      this.searchDto.fighters = (this.fieldFtr === 'true');
    }
    console.log(this.searchDto);
    console.log(typeof this.searchDto.fighters);
    this.apiService.searchVessels(this.searchDto, this.page.meta.currentPage, this.rowsPerPage, this.sortBy, this.sortOrder)
      .subscribe(res => {
        this.page = res;
      })

  }

  onClearSearch() {
    this.fieldName = null;
    this.fieldType = null;
    this.fieldFtr = null;
    this.searchDto = { name: null, type: null, fighters: null };
    this.apiService.searchVessels(this.searchDto, this.page.meta.currentPage, this.rowsPerPage, this.sortBy, this.sortOrder)
      .subscribe(res => {
        this.page = res;
      })
  }

  onEdit(ship: ShipEntity) {
    this.router.navigate(['edit', ship.id]);
  }

  onDelete(id: string) {
    this.confirmationService.confirm({
      header: 'Delete Vessel',
      message: `Are you sure you want to delete the vessel with id: ${id}?`,
      icon: 'pi pi-exclamation-circle',

      accept: () => {
        this.apiService.deleteVessel(id);
        this.messageService.add({ severity: 'success', summary: `Vessel with id ${id} has been deleted` });
        window.location.reload();
      },

      reject: () => {
      }
    });
  }

}
