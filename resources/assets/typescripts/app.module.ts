///<reference path="../../../typings/index.d.ts"/>

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavComponent }   from './nav.component';
import { AppComponent }   from './app.component';
import { LoginComponent }   from './login.component';
import { DashboardComponent }   from './dashboard.component';
import { RegisterComponent }   from './register.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { apiService} from './apiservice.service';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

const appRoutes: Routes = [
	{ path: '', component: LoginComponent, pathMatch: 'full' },
	{ path: 'register', component: RegisterComponent },
	{ path: 'login', component: LoginComponent },
   	{ path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports:      [ BrowserModule,FormsModule,HttpModule,RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent,LoginComponent,RegisterComponent,DashboardComponent ],
  providers: [ apiService,{provide: APP_BASE_HREF, useValue : '/Project/Blog/public/' }],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }