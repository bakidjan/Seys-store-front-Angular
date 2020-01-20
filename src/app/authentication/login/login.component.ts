import {Component, OnInit, Output} from '@angular/core';
import {AuthenticationService} from '../../services/authentication/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private users: any;
  private isAuthenticated: boolean;
  private userAuthenticated: any;
  mode: number=0;
  private messageError: string;
  private userUnregistered: any;
  private existingEmailMessage: any;

  constructor(private authService: AuthenticationService,
              private router : Router) { }

  ngOnInit() {
    this.authService.getUsers()
      .subscribe(data=>{
        this.users = data;
      })
  }

  login(username: string, password: string) {
    let user;
    this.users._embedded.users.forEach(u => {
      if (u.username == username && u.password == password) {
        user = u;
      }
    });
    if (user) {
      this.isAuthenticated = true;
      this.userAuthenticated = user;
    } else {
      this.isAuthenticated = false;
      this.userAuthenticated = undefined;
      this.messageError = this.userUnregistered.username;
    }
  }

  onLogin(value) {
    this.userUnregistered = value;
    this.login(value.username, value.password);
    sessionStorage.setItem(value.username, value.password);
    localStorage.setItem(value.username, value.password)
    if(this.isAuthenticated){
      this.router.navigateByUrl('products');
    }
  }

  onUserRegistration() {
    this.router.navigateByUrl('registration')
  }

  onAdminRegistration() {
    this.mode = 1;
  }

  adminRegistration(value: any) {
    this.authService.signUp(this.authService.host+'/addAdmin', value)
      .subscribe(data=>{
        console.log(data)
      }, error => {
        this.existingEmailMessage = value.email;
      })
  }
}
