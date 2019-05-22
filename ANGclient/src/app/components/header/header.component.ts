import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public loggedNav: Array<any>;
  public unLoggedNav: Array<any>;
  public activeNav: Array<any>;
  public userIsConnected: boolean;

  @Input() title: string;

  constructor() {
    this.userIsConnected = false;
    this.unLoggedNav = [
      {
        value: 'Accueil',
        path: '/'
      },
      {
        value: 'Inscription',
        path: '/register'
      },
      {
        value: 'Connection',
        path: '/login'
      }
    ];

    this.loggedNav = [
      {
        value: 'Accueuil',
        path: '/'
      },
      {
        value: 'Mon compte',
        path: '/me'
      }
    ];
  }

  private checkUserToken = () => {
    if (window.localStorage.getItem('token')) {
      this.activeNav = this.loggedNav;
      this.userIsConnected = true;
    } else {
      this.activeNav = this.unLoggedNav;
      this.userIsConnected = false;
    }
  }

  public logoutUser = () => {
    window.localStorage.removeItem('token');
    this.activeNav = this.unLoggedNav;
    this.userIsConnected = false;
  }

  ngOnInit() {
    this.checkUserToken();
  }
}
