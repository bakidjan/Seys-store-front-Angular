import {Component, Input, OnInit} from '@angular/core';
import {AuthenticationService} from '../../services/authentication/authentication.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  private existingEmailMessage: String;
  private existingUsernameMessage: string;
  mode: number= 0;

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
  }

  userRegistration(value: any) {
    this.authService.signUp(this.authService.host+'/addUser', value)
      .subscribe(data=>{
        console.log(data)
      }, error => {
        this.existingEmailMessage = value.email;
        this.existingUsernameMessage = value.username;
      })
  }
}
