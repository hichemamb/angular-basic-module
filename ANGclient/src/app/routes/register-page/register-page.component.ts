import { Component, OnInit } from '@angular/core';

import {AuthService} from '../../services/auth/auth.service';
import {UserModel} from '../../models/user.model';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  constructor(private authService: AuthService) { }

  private registerUser = ( userData: UserModel) => {
    console.log(userData);
    this.authService.register(userData)
      .then(apiResponse => console.log(apiResponse))
      .catch(apiResponse => console.log(apiResponse));
  }

  ngOnInit() {
  }

}
