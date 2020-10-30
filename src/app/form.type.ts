import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FieldArrayType, FieldType, FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-form-type',
  template: `
  <div 
      *ngFor="let step of field.fieldGroup; let index = index; let last = last;">
      <formly-field *ngIf="to.sectionIndex === index" [field]="step"></formly-field>
  </div>
`,
})

export class FormTypeComponent extends FieldType {
  @Output() nextPage = new EventEmitter<any>();

  isValid(field: FormlyFieldConfig) {
    if (field.key) {
      return field.formControl.valid;
    }

    return field.fieldGroup.every(f => this.isValid(f));
  }

  onNext() {
    this.to.sectionIndex++
    console.log('Event sent in child: ', this.to.sectionIndex);
    this.nextPage.emit(this.to.sectionIndex);
  }
}
