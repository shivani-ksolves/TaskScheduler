import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { Appproduct } from './product.component';
import { Appinventory } from './inventory.component';
import { Apphome } from './home.component';
import { PageNotFoundComponent } from  './NotFound.component' 
import { HttpModule } from '@angular/http';

import { FormsModule } from '@angular/forms';
import { ProductFormComponent } from './product-form.component';

import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './share/shared.module';

const appRoutes: Routes = [
   { path: 'Product', component: Appproduct },
   { path: 'Inventory', component: Appinventory },
   { path: '', component: Apphome } 
   
];

@NgModule ({
   imports: [ BrowserModule,RouterModule.forRoot(appRoutes),FormsModule,HttpModule,SharedModule],
   declarations: [ AppComponent,Appproduct,Appinventory,PageNotFoundComponent,ProductFormComponent,Apphome],
   bootstrap: [ AppComponent ]
})
export class AppModule { }