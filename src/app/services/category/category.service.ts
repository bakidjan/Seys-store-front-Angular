import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {KeycloakSecurityService} from '../keycloak/keycloak-security.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  public host: string = 'http://localhost:8081';

  constructor(private httpClient: HttpClient, private securityService: KeycloakSecurityService) {
  }
  public getCategory() {
    /*
    {headers: new HttpHeaders({Authorization: "Bearer " +this.securityService.kc.token})}
    permet d'envoyer à keycloak le token dans l'entête pour la lecture des data (categories)
     */
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
