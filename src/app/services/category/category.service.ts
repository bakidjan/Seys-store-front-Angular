import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  public host: string = 'http://localhost:8081';

  constructor(private httpClient: HttpClient) {
  }
  public getCategory() {
    return this.httpClient.get(this.host + '/categories');
  }

  public getProductsByCategory(id){
    return this.httpClient.get(this.host+'/categories/'+id+'/products')
  }

  public addNewCategory(url, data){
    return this.httpClient.post(url, data)
  }

  public deleteCategory(url){
    return this.httpClient.delete(url)
  }
}
