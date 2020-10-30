import { Component, OnInit } from '@angular/core';
import { FieldArrayType } from '@ngx-formly/core';

@Component({
  selector: 'formly-repeat-section',
  templateUrl: './repeat.type.html',
})
export class RepeatTypeComponent extends FieldArrayType implements OnInit {

  ngOnInit() {
    this.field.templateOptions.onAdd = () => {
      console.log('Add hit')
      this.add();
    }
    console.log(this.field.templateOptions);
  }
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */