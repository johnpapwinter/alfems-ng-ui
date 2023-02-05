import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../../core/services/api.service";
import {PageDto} from "../../../core/domain/dto/page.dto";
import {TaskForceEntity} from "../../../core/domain/entities/task-force.entity";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tf: any = [];
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

  constructor(private api: ApiService) {
  }

  ngOnInit(): void {
    this.api.getTest(1, 60)
      .subscribe(res => {
        console.log('RESPONSE')
        console.log(res)
        this.tf = res.items;
        // this.tf = res.items;
        console.log('ITEMS')
        this.page = res
        console.log(this.page.items)
      })
  }


}
