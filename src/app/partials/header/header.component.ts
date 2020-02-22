import { Component, OnInit } from '@angular/core';
import {KeycloakSecurityService} from '../../services/keycloak/keycloak-security.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public securityService: KeycloakSecurityService) { }

  ngOnInit() {
  }

  onLogout() {
    return this.securityService.kc.logout();
  }

  onLogin() {
    return this.securityService.kc.login();
  }

  onChangPassword() {
    return this.securityService.kc.accountManagement();
  }
}
