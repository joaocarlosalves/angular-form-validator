import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: []
})

export class FormComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: [null, [
        Validators.required, 
        Validators.email
      ]],
      password: [null, [
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(5)
      ]],
      date: [null, [
        Validators.required
      ]]
    });
  }

  isValidField(field: string) {
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched)
    );
  }

  validateAllFormFields(formGroup: FormGroup) {       
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);            
      if (control instanceof FormGroup) {       
        this.validateAllFormFields(control);
      }
    });
  }

  submit() {
    if (this.form.valid) {
      console.log(this.form);
      console.log('Form enviado');
    } else {
      this.validateAllFormFields(this.form);
      console.log('Form não enviado');
    }
  }
}
