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
import { LoginComponent } from './components/login/login.component';
import {CardModule} from "primeng/card";
import {ReactiveFormsModule} from "@angular/forms";
import {ChipsModule} from "primeng/chips";
import {PasswordModule} from "primeng/password";
import {ButtonModule} from "primeng/button";
import {HttpClientModule} from "@angular/common/http";
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    RegistryComponent,
    AddShipComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        MenuModule,
        MenubarModule,
        CardModule,
        ReactiveFormsModule,
        ChipsModule,
        PasswordModule,
        ButtonModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
