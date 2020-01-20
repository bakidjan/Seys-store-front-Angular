import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product/product.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {
  private cateId : number;

  constructor(private prodService: ProductService,
              private router:Router) { }

  ngOnInit() {
  }

  onAddProduct(value: any) {
    this.prodService.addNewProduct(this.prodService.host+'/category/'+this.cateId+'/product', value)
      .subscribe(data=>{
        console.log(value)
      }, error => {
        console.log(error)
      })
  }

}
