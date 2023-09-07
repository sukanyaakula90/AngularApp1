import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Test2Component } from './test2/test2.component';
import { FormsModule } from '@angular/forms';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentService } from './student.service';
import {HttpClientModule}from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer/customer.component';


@NgModule({
  declarations: [
    AppComponent, 
    Test2Component, StudentListComponent, CustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule,CommonModule

  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
