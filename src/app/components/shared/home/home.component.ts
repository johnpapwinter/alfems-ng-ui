import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../../core/services/api.service";
import {PageDto} from "../../../core/domain/dto/page.dto";
import {TaskForceEntity} from "../../../core/domain/entities/task-force.entity";
import {AuthService} from "../../../core/services/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  check: boolean;

  constructor(private api: ApiService,
              private auth: AuthService) {
    this.check = auth.isAdmin();
  }

  ngOnInit(): void {
  }


}
