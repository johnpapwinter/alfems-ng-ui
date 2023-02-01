import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TaskForceDto} from "../../../core/domain/dto/task-force.dto";
import {Router} from "@angular/router";
import {ApiService} from "../../../core/services/api.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-add-task-group',
  templateUrl: './add-task-group.component.html',
  styleUrls: ['./add-task-group.component.css']
})
export class AddTaskGroupComponent {
  addTaskForceForm = new FormGroup({
    name: new FormControl(null, [Validators.required]),
  })

  taskForce: TaskForceDto = { name: '' }

  constructor(private router: Router,
              private apiService: ApiService,
              private messageService: MessageService) {
  }

  addTaskForce() {
    if (this.addTaskForceForm.value.name !== null) {
      this.taskForce.name = this.addTaskForceForm.value.name;
      this.apiService.addTaskGroup(this.taskForce).subscribe(res => {})
      this.messageService.add({ severity: 'success', summary: 'The task force was successfully added' })
      this.router.navigateByUrl('home');
    }
  }

  onCancel() {

  }

  get addTaskForceFormControl() {
    return this.addTaskForceForm.controls;
  }
}
