import {Component, OnInit} from '@angular/core';
import {UserModel} from '../../models/user.model';
import {AuthService} from '../../services/auth/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private authService: AuthService) {
  }

  private loginUser = (userData: UserModel) => {
    console.log(userData);
    this.authService.login(userData)
      .then(apiResponse => {
        console.log(apiResponse);
        window.localStorage.setItem('token', apiResponse.data.token);
      })
      .catch(apiResponse => console.log(apiResponse));
  }

  ngOnInit() {
  }

}
