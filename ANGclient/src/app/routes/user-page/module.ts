/*
Imports
*/
// Angular
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

// Gestion des formulaires

import { FormsModule, ReactiveFormsModule} from '@angular/forms';

// Inner
import {UserPageComponent} from './user-page.component';
import {Routing} from './router';
//


/*
Definition
*/
@NgModule({
  declarations: [UserPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // Ajouter le router dans le tableau des imports
    Routing
  ]
})
//


/*
Export
*/
export class Module {}
