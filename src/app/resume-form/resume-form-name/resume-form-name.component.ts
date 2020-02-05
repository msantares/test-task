import {Component} from '@angular/core';
import {MatFormFieldControl} from '@angular/material/form-field';
import {BaseCustomInput} from "../base-custom-input";
import {NgControl} from "@angular/forms";

@Component({
  selector: 'app-resume-form-name',
  templateUrl: 'resume-form-name.component.html',
  providers: [{provide: MatFormFieldControl, useExisting: ResumeFormNameComponent}],
  host: {
    '[class.example-floating]': 'shouldLabelFloat',
    '[id]': 'id',
    '[attr.aria-describedby]': 'describedBy',
  }
})
export class ResumeFormNameComponent extends BaseCustomInput {
  constructor(
    public ngControl: NgControl
  ){
    super(ngControl);
  }
  
}
