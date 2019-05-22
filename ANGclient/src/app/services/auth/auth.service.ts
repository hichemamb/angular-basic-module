import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserModel} from '../../models/user.model';
import {environment} from '../../../environments/environment';
const { post_register, post_login, get_authenticate } = environment;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  // Method Register
  public register = (userData: UserModel): Promise<any> => {
    const myHeader = new HttpHeaders();
    myHeader.append('Content-Type', 'application/json');

    return this.httpClient.post(`${post_register}`, userData, {headers: myHeader})
      .toPromise().then(this.getData).catch(this.handleError);
  }

  // Method Login
  public login = (userData: UserModel): Promise<any> => {
    const myHeader = new HttpHeaders();
    myHeader.append('Content-Type', 'application/json');

    return this.httpClient.post(`${post_login}`, userData, {headers: myHeader})
      .toPromise().then(this.getData).catch(this.handleError);
  }

  // Method Authenticate
  public authenticate = (): Promise<any> => {

    const header = {
      headers: new HttpHeaders()
        .set('Authorization',  `Bearer ${window.localStorage.getItem('token')}`)
    }

    return this.httpClient.get(`${get_authenticate}`, header)
      .toPromise().then(this.getData).catch(this.handleError);
  }

  // Get the API response
  private getData(res: any) {
    return res || {};
  }

  // Get the API error
  private handleError(err: any) {
    return Promise.reject(err.error);
  }
}
