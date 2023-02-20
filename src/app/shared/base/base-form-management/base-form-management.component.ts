import { Component } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-base-form-management',
  template: ``,
  styles: [],
})
export class BaseFormManagement<
  T extends { [K in keyof T]: AbstractControl<any, any> }
> {
  isEditMode = false;
  isSubmitted = false;

  formData = new FormGroup<T>(<T>{});

  constructor() {}

  onSendForm() {
    if (this.formData.valid) {
    }
  }
  onCancelForm() {
    console.log('cancel');
  }
}
