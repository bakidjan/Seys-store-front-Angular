import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../services/category/category.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-category-new',
  templateUrl: './category-new.component.html',
  styleUrls: ['./category-new.component.css']
})
export class CategoryNewComponent implements OnInit {

  constructor(private catService: CategoryService,
              private  router: Router) { }

  ngOnInit() {
  }

  onAddCategory(value: any) {
    let conf = confirm("sûr?");
    if (conf){
      this.catService.addNewCategory(this.catService.host+'/categories', value)
        .subscribe(data=>{
          console.log(data)
          this.router.navigateByUrl('products')
        }, error => {
          console.log(error)
        })
    }

  }
}
