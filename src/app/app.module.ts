import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppRoutingModule } from './app-routing-module/app-routing.module';

import { AppComponent }  from './app.component';
import { HeaderComponent } from './header-component/header.component';
import { DashboardComponent } from './dashboard-component/dashboard.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [ 
    AppComponent,
    HeaderComponent,
    DashboardComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
