import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductsListComponent} from './product/products-list/products-list.component';
import {AppComponent} from './app.component';
import {ProductDetailComponent} from './product/product-detail/product-detail.component';
import {ProductNewComponent} from './product/product-new/product-new.component';
import {LoginComponent} from './authentication/login/login.component';
import {CategoryNewComponent} from './product/category-new/category-new.component';


const routes: Routes = [
  {path: 'products', component: ProductsListComponent},
  {path: 'product/:id',component: ProductDetailComponent},
  {path: 'new-product',component: ProductNewComponent},
  {path: 'login',component: LoginComponent},
  {path: 'logout', redirectTo: '/login', pathMatch: 'full'},
  {path: 'new-category', component: CategoryNewComponent},
  {path: '', redirectTo: 'products', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
