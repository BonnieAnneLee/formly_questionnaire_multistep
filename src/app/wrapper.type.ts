import { Component } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'xilo-mono-form-viewer-wrapper-panel',
  template: `
  <section 
    class="form-section"
    #FormSection>
    <div class="form-header">
        <div
            class="header-content no-padding"
        >
            <h2 class="question-title">
                {{ to.label }}
            </h2>
            <h6 class="question-subtitle">{{ to.description }}</h6>
        </div>
    </div>
    <div class="form-field-section take-all-space">
        <ng-container #fieldComponent></ng-container>
    </div>
</section>
`,
})
export class FormViewerPanelWrapperComponent extends FieldWrapper {
}