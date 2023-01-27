import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {AddShipComponent} from "./components/add-ship/add-ship.component";
import {RegistryComponent} from "./components/registry/registry.component";
import {LoginComponent} from "./components/login/login.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {AuthGuard} from "./core/guards/auth.guard";
import {EditShipComponent} from "./components/edit-ship/edit-ship.component";


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/home', pathMatch: "full" },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'edit/:id', component: EditShipComponent, canActivate: [AuthGuard] },
  { path: 'registry', component: RegistryComponent, canActivate: [AuthGuard] },
  { path: 'add-ship', component: AddShipComponent, canActivate: [AuthGuard] },
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
