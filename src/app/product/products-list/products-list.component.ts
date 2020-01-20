import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../services/category/category.service';
import {Router} from '@angular/router';
import {ProductService} from '../../services/product/product.service';
import {NgAnalyzedFile} from '@angular/compiler';
import {HttpEventType, HttpResponse} from '@angular/common/http';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  private categories: any;
  private currentProduct: any;
  private currentCategory: any;
  photoToEdit: boolean;
  private timeStamp: Date;
  private photoSelectedToUpload: any;
  private idCurrentProduct: any;
  private currentPhotoSelected: any;
  private showInputPhotoLoader: boolean;

  constructor(private catService: CategoryService,
              private router: Router,
              private prodService: ProductService) {
  }

  ngOnInit(): void {
    this.onGetCategory();
    this.onGetAllProducts();
  }

  onGetCategory() {
    this.catService.getCategory()
      .subscribe(data => {
        this.categories = data;
      }, error => {
        console.log(error);
      });
  }

  onGetProductsByCategory(c: any) {
    this.currentCategory = c;
    this.catService.getProductsByCategory(c.id)
      .subscribe(data => {
        this.currentProduct = data;
      }, error => {
        console.log(error);
      });
  }

  onGetAllProducts() {
    this.prodService.getProducts()
      .subscribe(data => {
        this.currentProduct = data;
      }, error => {
        console.log(error);
      });
  }

  onGetProductDetail(p: any) {
    this.router.navigateByUrl('product/' + p.id);
  }

  onAddNewCategory() {
    this.router.navigateByUrl('new-category');
  }

  onDeleteCategory(c: any) {
    console.log(c);
    this.catService.deleteCategory(c.id)
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      });
  }

  onChargePhotoSelectedToUpload(event) {
    this.photoSelectedToUpload = event.target.files;
    this.onUploadPhotoSelected();
  }

  onEditPhoto(p: any) {
    this.idCurrentProduct = p;
    this.photoToEdit = true;
    this.showInputPhotoLoader = true;
  }

  onUploadPhotoSelected() {
    this.showInputPhotoLoader = false;
    this.currentPhotoSelected = this.photoSelectedToUpload.item(0);
    this.prodService.uploadPhoto(this.currentPhotoSelected, this.idCurrentProduct.id)
      .subscribe(event => {
        this.timeStamp = new Date();
      }, error => {
        console.log(error);
      });
    this.photoSelectedToUpload = undefined;
  }

  getTS() {
    return this.timeStamp;
  }

  onDeletePhoto(p: any) {
    let confirmation = confirm('etes vous sûr ?');
    if (confirmation) {
      this.prodService.deletedProduct(p._links.self.href)
        .subscribe(data => {
          console.log('bien supprimé !');
          this.onGetAllProducts();
        }, error => {
          console.log(error);
        });
    }
  }

  onAddNewProduct(p: any) {
    this.router.navigateByUrl('new-product')
  }
}
