import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-button',
  template: `
    <div>
      <button [type]="to.type" (click)="onClick(to, $event)">
        {{ to.text }}
      </button>
    </div>
  `,
})
export class FormlyFieldButton extends FieldType {
  onClick(to, $event) {
    console.log(this.field.parent);
    console.log(this.to.parent);
    this.field.parent.add();
    if (this.to.onClick) {
      this.to.onClick(to, $event);
    }
  }
}