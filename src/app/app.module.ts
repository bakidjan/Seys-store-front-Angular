import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

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
import { RegistrationComponent } from './authentication/registration/registration.component';
import {KeycloakSecurityService} from './services/keycloak/keycloak-security.service';

export function kcFactory(kcSecurity: KeycloakSecurityService) {
  return ()=> kcSecurity.init();
}

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
    RegistrationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: APP_INITIALIZER, deps:[KeycloakSecurityService], useFactory: kcFactory, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
