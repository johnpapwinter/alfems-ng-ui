import {Component, OnInit} from '@angular/core';
import {ShipEntity} from "../../core/domain/entities/ship.entity";
import {ApiService} from "../../core/services/api.service";

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.css']
})
export class RegistryComponent implements OnInit {
  registry: ShipEntity[] = [];

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.apiService.getRegistry().subscribe(res => {
      this.registry = res;
    })
  }

}
