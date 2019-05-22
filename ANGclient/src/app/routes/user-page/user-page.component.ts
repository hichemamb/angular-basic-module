import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  constructor(private authService: AuthService) { }

  private userAuthentication = () => {
    this.authService.authenticate()
      .then(data => console.log(data))
      .catch(err => console.error(err));
  }

  ngOnInit() {
    this.userAuthentication();
  }

}
