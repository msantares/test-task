import { Component, OnInit } from '@angular/core';
import {BaseCustomInput} from "../base-custom-input";
import {NgControl} from "@angular/forms";
import {MatFormFieldControl} from "@angular/material";

@Component({
  selector: 'app-resume-form-birthdate',
  templateUrl: './resume-form-birthdate.component.html',
  providers: [{provide: MatFormFieldControl, useExisting: ResumeFormBirthdateComponent}],
})
export class ResumeFormBirthdateComponent extends BaseCustomInput {
  constructor(
    public ngControl: NgControl
  ){
    super(ngControl);
  }

  ngOnInit() {
  }

}
