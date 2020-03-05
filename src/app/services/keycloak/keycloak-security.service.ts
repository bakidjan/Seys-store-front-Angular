import { Injectable } from '@angular/core';
import {KeycloakInstance} from 'keycloak-js';
declare let Keycloak : any;

@Injectable({
  providedIn: 'root'
})
export class KeycloakSecurityService {
public kc: any;//: KeycloakInstance;
  constructor() { }
   async init(){
    console.log("keycloak sec......");
    this.kc = new Keycloak({
      url:"http://localhost:8080/auth",
      realm: "sey-store-realm",
      clientId: "sey-store-front"
    });
    //methode init de keycloak
     await this.kc.init({
       //oblige une auth pour acceder à l'app
      //onLoad:"login-required",
      onLoad: 'check-sso',
      promiseType:'native'
    });
     /*
     * .then((authenticated)=>{
       console.log(authenticated)
     });*/
    console.log(this.kc.token)
  }

}
