import {Component, Input, OnInit} from '@angular/core';
import {AuthenticationService} from '../../services/authentication/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  /*private existingUsernameMessage: string = "";
  mode: number= 0;

  constructor(private authService: AuthenticationService,
              private router: Router) { }*/

  ngOnInit() {
  }

  /*userRegistration(value: any) {
    this.authService.signUp(this.authService.host+'/addUser', value)
      .subscribe(data=>{
        console.log(data);
        this.router.navigateByUrl('login')
      }, error => {
        console.log(error.error.message)
        this.existingUsernameMessage = "l'emil est deja utilisé par un autre user";
      })
  }*/
}
