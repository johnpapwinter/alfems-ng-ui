import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/shared/home/home.component";
import {AddShipComponent} from "./components/vessels/add-ship/add-ship.component";
import {RegistryComponent} from "./components/vessels/registry/registry.component";
import {LoginComponent} from "./components/shared/login/login.component";
import {PageNotFoundComponent} from "./components/shared/page-not-found/page-not-found.component";
import {AuthGuard} from "./core/guards/auth.guard";
import {EditShipComponent} from "./components/vessels/edit-ship/edit-ship.component";
import {TaskGroupListComponent} from "./components/task-groups/task-group-list/task-group-list.component";
import {AddTaskGroupComponent} from "./components/task-groups/add-task-group/add-task-group.component";
import {EditTaskGroupComponent} from "./components/task-groups/edit-task-group/edit-task-group.component";


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/home', pathMatch: "full" },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'edit/:id', component: EditShipComponent, canActivate: [AuthGuard] },
  { path: 'registry', component: RegistryComponent, canActivate: [AuthGuard] },
  { path: 'add-ship', component: AddShipComponent, canActivate: [AuthGuard] },
  { path: 'task-group-list', component: TaskGroupListComponent, canActivate: [AuthGuard] },
  { path: 'add-task-group', component: AddTaskGroupComponent, canActivate: [AuthGuard] },
  { path: 'edit-task-group/:id', component: EditTaskGroupComponent, canActivate: [AuthGuard] },
  { path: '**', component: PageNotFoundComponent, canActivate: [AuthGuard] },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
