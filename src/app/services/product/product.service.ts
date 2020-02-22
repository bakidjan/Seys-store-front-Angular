import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public host: String = 'http://localhost:8081';

  constructor(private httpClient: HttpClient) {
  }

  getProducts() {
    return this.httpClient.get(this.host + '/products');
  }

  getProductById(id) {
    return this.httpClient.get(this.host + '/products/' + id);
  }

  patchResource(url, data) {
    return this.httpClient.patch(url, data);
  }

  addNewProduct(url, data) {
    return this.httpClient.post(url, data);
  }

  deletedProduct(url){
    return this.httpClient.delete(url);
  }

  uploadPhoto(photoToUpload: File, id: number): Observable<HttpEvent<{}>> {
    const url = this.host + '/uploadPhoto/' + id;
    const formData: FormData = new FormData();
    formData.append('file', photoToUpload);
    const req = new HttpRequest('POST', url, formData, {
      reportProgress: true,
      responseType: 'text',
    });
    return this.httpClient.request(req);
  }
}
