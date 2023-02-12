import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/shared/dashboard/dashboard.component';
import { HomeComponent } from './components/shared/home/home.component';
import { AppRoutingModule } from "./app-routing.module";
import {MenuModule} from "primeng/menu";
import {MenubarModule} from "primeng/menubar";
import { RegistryComponent } from './components/vessels/registry/registry.component';
import { AddShipComponent } from './components/vessels/add-ship/add-ship.component';
import { LoginComponent } from './components/shared/login/login.component';
import {CardModule} from "primeng/card";
import {ReactiveFormsModule} from "@angular/forms";
import {ChipsModule} from "primeng/chips";
import {PasswordModule} from "primeng/password";
import {ButtonModule} from "primeng/button";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import {TabMenuModule} from "primeng/tabmenu";
import {JwtInterceptor} from "./core/interceptors/jwt.interceptor";
import {TableModule} from "primeng/table";
import {PaginatorModule} from "primeng/paginator";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RippleModule} from "primeng/ripple";
import { EditShipComponent } from './components/vessels/edit-ship/edit-ship.component';
import {ConfirmationService, MessageService} from "primeng/api";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {LoadingSpinnerInterceptor} from "./core/interceptors/loading-spinner.interceptor";
import {ToastModule} from "primeng/toast";
import {TieredMenuModule} from "primeng/tieredmenu";
import {AvatarModule} from "primeng/avatar";
import { AddTaskGroupComponent } from './components/task-groups/add-task-group/add-task-group.component';
import { EditTaskGroupComponent } from './components/task-groups/edit-task-group/edit-task-group.component';
import { TaskGroupListComponent } from './components/task-groups/task-group-list/task-group-list.component';
import {ApiErrorInterceptor} from "./core/interceptors/api-error.interceptor";
import { ManageTaskGroupComponent } from './components/task-groups/manage-task-group/manage-task-group.component';
import { ManageVesselComponent } from './components/vessels/manage-vessel/manage-vessel.component';
import {AutoCompleteModule} from "primeng/autocomplete";
import {OverlayPanelModule} from "primeng/overlaypanel";
import {RadioButtonModule} from "primeng/radiobutton";
import { RegisterComponent } from './components/shared/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    RegistryComponent,
    AddShipComponent,
    LoginComponent,
    PageNotFoundComponent,
    EditShipComponent,
    AddTaskGroupComponent,
    EditTaskGroupComponent,
    TaskGroupListComponent,
    ManageTaskGroupComponent,
    ManageVesselComponent,
    RegisterComponent
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
        RippleModule,
        ConfirmDialogModule,
        ProgressSpinnerModule,
        ToastModule,
        TieredMenuModule,
        AvatarModule,
        AutoCompleteModule,
        OverlayPanelModule,
        RadioButtonModule
    ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingSpinnerInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ApiErrorInterceptor, multi: true },
    ConfirmationService,
    MessageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
