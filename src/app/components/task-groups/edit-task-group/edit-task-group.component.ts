import {Component, OnInit} from '@angular/core';
import {TaskForceEntity} from "../../../core/domain/entities/task-force.entity";
import {TaskForceDto} from "../../../core/domain/dto/task-force.dto";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {ApiService} from "../../../core/services/api.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-edit-task-group',
  templateUrl: './edit-task-group.component.html',
  styleUrls: ['./edit-task-group.component.css']
})
export class EditTaskGroupComponent implements OnInit {
  taskForce: TaskForceEntity = { id: '', name: '', ships: [] }
  dto: TaskForceDto = { name: '' }
  id: string | null = '';
  editTaskForceForm = new FormGroup({
    name: new FormControl,
  })

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private apiService: ApiService,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
    });
    if (this.id) {
      this.apiService.getTaskGroupById(this.id).subscribe(res => {
        this.taskForce = res;
        this.editTaskForceForm.setValue({ name: this.taskForce.name });
      });
    }
  }

  editTaskForce() {
    this.dto = this.editTaskForceForm.value;
    this.apiService.editTaskGroup(this.taskForce.id, this.dto);
    this.messageService.add({ severity: 'success', summary: "The task force's information was successfully changed" });
    this.router.navigateByUrl('home');
  }

  onCancel() {
    this.router.navigateByUrl('home');
  }


}
