/*
Imports
*/
// Angular
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

// Inner
import {HomePageComponent} from './home-page.component';
import {Routing} from './router';
import {MerchantCardComponent} from '../../components/merchant-card/merchant-card.component';
//


/*
Definition
*/
@NgModule({
  declarations: [HomePageComponent, MerchantCardComponent],
  imports: [
    CommonModule,
    Routing
  ]
})
//


/*
Export
*/
export class Module {}
