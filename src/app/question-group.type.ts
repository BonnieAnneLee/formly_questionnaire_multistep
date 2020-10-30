import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FieldArrayType, FieldType, FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-grouper',
  template: `
  <div 
      *ngFor="let qg of field.fieldGroup; let index = index; let last = last;">
        <formly-field [field]="qg"></formly-field>
  </div>
`,
})

export class QuestionGroupTypeComponent extends FieldType {
  questionGroupIndex = 0;
  @Output() nextPage = new EventEmitter<any>();

  isValid(field: FormlyFieldConfig) {
    if (field.key) {
      return field.formControl.valid;
    }

    return field.fieldGroup.every(f => this.isValid(f));
  }

  onNext() {
    this.questionGroupIndex++
    console.log('Event sent in child: ', this.questionGroupIndex);
    this.nextPage.emit(this.questionGroupIndex);
  }
}
