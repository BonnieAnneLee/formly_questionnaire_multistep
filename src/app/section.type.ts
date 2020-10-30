import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FieldArrayType, FieldType, FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-stepper',
  template: `
  <div 
      *ngFor="let step of field.fieldGroup; let index = index; let last = last;">
      <formly-field *ngIf="questionGroupIndex === index" [field]="step"></formly-field>

      <div>
        <button 
          *ngIf="!last && questionGroupIndex === index"
          (click)="onNext()"
          class="btn btn-primary" type="button">
          Next Question Group
        </button>
        <button 
          *ngIf="last && questionGroupIndex === index"
          (click)="onNextSection()"
          class="btn btn-primary" type="button">
          Next Section
        </button>
        <button 
          *ngIf="last && questionGroupIndex === index && field.parent.type === 'repeat'"
          (click)="onRepeat()"
          class="btn btn-primary" type="button">
          Add Obj
        </button>
      </div>
  </div>
`,
})

export class SectionTypeComponent extends FieldType {
  questionGroupIndex = 0;
  @Output() nextPage = new EventEmitter<any>();

  isValid(field: FormlyFieldConfig) {
    if (field.key) {
      return field.formControl.valid;
    }

    return field.fieldGroup.every(f => this.isValid(f));
  }

  onNext($event) {
    this.questionGroupIndex++
    console.log('Event sent in child: ', this.field, this.questionGroupIndex);
    if (this.to.onClick) {
      this.to.onClick(this.field, this.questionGroupIndex);
    }
  }

  onNextSection($event) {
    this.questionGroupIndex = 0;
    console.log('Next Section fired');
    console.log(this.field.parent);
    this.field.parent.templateOptions.sectionIndex ++;
  }

  onRepeat() {
    this.questionGroupIndex = 0;
    console.log(this.field.parent);
    this.field.parent.templateOptions.onAdd();
    this.field.parent.templateOptions.subIndex++;
  }
}
