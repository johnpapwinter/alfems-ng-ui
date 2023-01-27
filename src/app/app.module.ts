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
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {TabMenuModule} from "primeng/tabmenu";
import {JwtInterceptor} from "./core/interceptors/jwt.interceptor";
import {TableModule} from "primeng/table";
import {PaginatorModule} from "primeng/paginator";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RippleModule} from "primeng/ripple";
import { EditShipComponent } from './components/edit-ship/edit-ship.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    RegistryComponent,
    AddShipComponent,
    LoginComponent,
    PageNotFoundComponent,
    EditShipComponent
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
    ButtonModule,
    TabMenuModule,
    TableModule,
    PaginatorModule,
    BrowserAnimationsModule,
    RippleModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
