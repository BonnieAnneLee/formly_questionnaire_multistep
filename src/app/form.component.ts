import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-form-component',
  template: `
        <form [formGroup]="form" (ngSubmit)="submit()">
          <formly-form
            [model]="model" 
            [fields]="fields" 
            [options]="options"
            (nextPage)="onNext($event)"
            [form]="form">
          </formly-form>
        </form>
        <p>{{ model | json }}</p>
  `,
})
export class FormlyFormComponent implements OnInit {
  @Input() fields: FormlyFieldConfig[];
  @Output() formChanged = new EventEmitter<any>();
  form = new FormGroup({})
  model = {};
  options: FormlyFormOptions = {};
  groupIndex = 0;
  questionIndex = 0;


  ngOnInit() {
  }

  onNextChild(field, $event) {
    console.log('Event hit in formly: ', field, $event);
  }

  submit() {
    alert(JSON.stringify(this.model));
  }
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */