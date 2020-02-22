import {Component, Injectable, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../../services/product/product.service';
import {CategoryService} from '../../services/category/category.service';
import {AuthenticationService} from '../../services/authentication/authentication.service';
import {KeycloakSecurityService} from '../../services/keycloak/keycloak-security.service';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  private currentProduct: any;
   mode: number = 0;

  constructor(private activatedRoute: ActivatedRoute,
              private prodService : ProductService,
              private  catService: CategoryService,
              private authService: AuthenticationService,
              private router: Router,
              private securityService: KeycloakSecurityService) { }

  ngOnInit() {

    let id =this.activatedRoute.snapshot.params.id;
    this.getProductDetail(id)

  }
getProductDetail(id){
  this.prodService.getProductById(id)
    .subscribe(data=>{
      this.currentProduct = data;
    }, error => {
      console.log(error)
    })
}


  onEditProduct() {
    this.mode=1;
  }

  onUpdateProduct(value: any) {
    let url = this.currentProduct._links.self.href;
    /*
    * patchResource permet la mise en jour d'un champ independemment
    * sinon un put change tous les champs*/
    this.prodService.patchResource(url, value)
      .subscribe(data => {
        confirm('est vous sûr ?');
        this.currentProduct = data;
        this.mode = 0;
      }, error => {
        console.log(error);
      });
  }

  onAddNewProduct() {
    this.router.navigateByUrl('new-product');
  }

  isApManager() {
    return this.securityService.kc.hasResourceRole("manager");
  }
}
