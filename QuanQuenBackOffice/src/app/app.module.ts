import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreComponent } from './modules/store/store.component';
import { SidebarComponent } from './modules/sidebar/sidebar.component';
import { DataTableComponent } from './_shared/component/data-table/data-table.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { TableModule } from 'primeng/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './modules/login/login.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { AuthInterceptor } from './_shared/_helpers/auth-interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MainComponent } from './modules/main/main.component';
import { RewardComponent } from './modules/reward/reward.component';

const Materials = [TableModule, MatCheckboxModule];
@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    SidebarComponent,
    DataTableComponent,
    LoginComponent,
    DashboardComponent,
    MainComponent,
    RewardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    Materials,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
