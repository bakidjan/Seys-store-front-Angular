import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './product/products-list/products-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { HeaderComponent } from './partials/header/header.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ProductNewComponent } from './product/product-new/product-new.component';
import { LoginComponent } from './authentication/login/login.component';
import { LogoutComponent } from './authentication/logout/logout.component';
import { CategoryNewComponent } from './product/category-new/category-new.component';
import { ProductUpdateComponent } from './product/product-update/product-update.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductDetailComponent,
    HeaderComponent,
    ProductNewComponent,
    LoginComponent,
    LogoutComponent,
    CategoryNewComponent,
    ProductUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
