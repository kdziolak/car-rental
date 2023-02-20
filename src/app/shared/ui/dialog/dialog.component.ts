import {
  Component,
  ContentChild,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  @ContentChild(TemplateRef) formTemplate: TemplateRef<any> | null = null;

  @Input() isVisible = false;
  @Input() header = '';
  @Input() draggable = false;
  @Output() onHide = new EventEmitter();

  wasSended = false;

  close() {
    this.onHide.emit(true);
  }
  onSendForm(): void {
    this.wasSended = true;
  }
  onCancelForm(): void {
    this.close();
  }
}
