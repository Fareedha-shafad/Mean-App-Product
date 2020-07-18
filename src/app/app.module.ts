import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, NgModel,ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product-list/product-list.component';
import {AppRoutingModule} from './app-routing.module';
import { NewProductComponent } from './new-product/new-product.component';
import {ProductService } from './product.service';
import { EditProductComponent } from './edit-product/edit-product.component';

@NgModule({
  declarations: [
    
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    NewProductComponent,
    EditProductComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

