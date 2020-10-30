import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';

import { AppComponent } from './app.component';
import { RepeatTypeComponent } from './repeat-type/repeat-section.type';
import { SectionTypeComponent } from './section.type';
import { QuestionGroupTypeComponent } from './question-group.type';
import { FormViewerPanelWrapperComponent } from './wrapper.type';
import { CarouselDirective } from './directives/carousel.directive';
import { FormTypeComponent } from './form.type';
import { FormlyFieldButton } from './button.type';
import { FormlyFormComponent } from './form.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormlyBootstrapModule,
    FormlyModule.forRoot({
      types: [
        { name: 'repeat', component: RepeatTypeComponent },
        { name: 'section', component: SectionTypeComponent },
        { name: 'form', component: FormTypeComponent },
        { name: 'questionGroup', component: QuestionGroupTypeComponent },
        { name: 'button', component: FormlyFieldButton },
      ],
      wrappers: [
        { name: 'panel', component: FormViewerPanelWrapperComponent },
      ],
    }),
  ],
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    FormlyFormComponent,
    RepeatTypeComponent,
    FormViewerPanelWrapperComponent,
    CarouselDirective,
    SectionTypeComponent,
    QuestionGroupTypeComponent,
    FormTypeComponent,
    FormlyFieldButton,
  ],
  exports: [
    CarouselDirective
  ]
})
export class AppModule { }


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */