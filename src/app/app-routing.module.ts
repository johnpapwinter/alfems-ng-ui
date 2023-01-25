import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {AddShipComponent} from "./components/add-ship/add-ship.component";
import {RegistryComponent} from "./components/registry/registry.component";
import {LoginComponent} from "./components/login/login.component";


const routes: Routes = [
  { path: 'login', component: LoginComponent, pathMatch: "full" },
  { path: '', component: HomeComponent, pathMatch: "full" },
  { path: 'home', component: HomeComponent, pathMatch: "full" },
  { path: 'registry', component: RegistryComponent, pathMatch: "full" },
  { path: 'add-ship', component: AddShipComponent, pathMatch: "full" },
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
