import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {

  public formData: FormGroup;

  @Output() formSubmit = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {
  }

  private resetForm = () => {
    this.formData = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  public submitForm = () => {
    this.formSubmit.emit(this.formData.value);
  }


  ngOnInit() {
    this.resetForm();
  }

}
