import { Injectable } from '@angular/core';
import {KeycloakInstance} from 'keycloak-js';
declare let Keycloak : any;

@Injectable({
  providedIn: 'root'
})
export class KeycloakSecurityService {
public kc: KeycloakInstance;
  constructor() { }
  async init(){
    console.log("keycloak sec......");
    this.kc = new Keycloak({
      url:"http://localhost:8080/auth",
      realm: "sey-store-realm",
      clientId: "sey-store-front"
    });
    await this.kc.init({
      //onLoad:"login-required",
      onLoad: 'check-sso',
      promiseType:'native'
    });
    console.log(this.kc.token)
  }

}
