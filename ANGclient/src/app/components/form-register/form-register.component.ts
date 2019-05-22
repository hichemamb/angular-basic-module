import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss']
})
export class FormRegisterComponent implements OnInit {

  public formData: FormGroup;

  @Output() formSubmit = new EventEmitter();

  constructor(private formBuilder: FormBuilder) { }

  private resetForm = () => {
    this.formData = this.formBuilder.group({
      first_name: [ 'Hichem', Validators.required],
      last_name: [ 'PetitGarçon', Validators.required],
      email: [ 'hichempetit@hichem.com', Validators.required],
      password: [ 'hichempetit', Validators.required],
      password_repeate: [ 'hichempetit', Validators.required],
      street: [ '20 rue de Hichem', Validators.required],
      city: [ 'Hichem City', Validators.required],
      country: [ 'Hichem Country', Validators.required],
      zip_code: [ '93370', Validators.required],
      birthdate: [ '09/07/1998', Validators.required],
      position: [ 'NULL', Validators.required],
      type: ['merchant', Validators.required],
      cgu: [true, Validators.required]

    });
  }

  public submitForm = () => {
    if (this.formData.value.password === this.formData.value.password_repeate) {
      this.formSubmit.emit(this.formData.value);
    }
  }

  ngOnInit() {
    this.resetForm();
  }

}
