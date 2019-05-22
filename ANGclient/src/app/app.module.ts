import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {MainRouter} from './app.router';
import { AppComponent } from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {AuthService} from './services/auth/auth.service';
import {MerchantService} from './services/merchant/merchant.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(MainRouter, {onSameUrlNavigation: 'reload'}),
    HttpClientModule
  ],
  providers: [AuthService, MerchantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
