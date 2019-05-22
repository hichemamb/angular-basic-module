import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
const {get_merchant} = environment;

@Injectable({
  providedIn: 'root'
})
export class MerchantService {

  constructor(private httpClient: HttpClient) { }

  // GET Merchant
  public getMerchant = (): Promise<any> => {
    return this.httpClient.get(`${get_merchant}`)
      .toPromise().then(this.getData).catch(this.handleError);
  };

  // Get the API response
  private getData(res: any) {
    return res || {};
  }

  // Get the API error
  private handleError(err: any) {
    return Promise.reject(err.error);
  }
}
