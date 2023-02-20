import { Component } from '@angular/core';

@Component({
  selector: 'base-dialog',
  template: ``,
  styles: [],
})
export class BaseDialog {
  isDialogOpen = false;
  constructor() {}

  closeDialog() {
    this.isDialogOpen = false;
  }
}
