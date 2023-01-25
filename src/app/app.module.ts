import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from "./app-routing.module";
import {MenuModule} from "primeng/menu";
import {MenubarModule} from "primeng/menubar";
import { RegistryComponent } from './components/registry/registry.component';
import { AddShipComponent } from './components/add-ship/add-ship.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    RegistryComponent,
    AddShipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuModule,
    MenubarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
