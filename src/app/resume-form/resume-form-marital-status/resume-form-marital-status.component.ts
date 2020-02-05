import { Component, OnInit } from '@angular/core';
import {BaseCustomInput} from "../base-custom-input";
import {NgControl} from "@angular/forms";
import {MatFormFieldControl} from "@angular/material";

@Component({
  selector: 'app-resume-form-marital-status',
  templateUrl: './resume-form-marital-status.component.html',
  providers: [{provide: MatFormFieldControl, useExisting: ResumeFormMaritalStatusComponent}],
  styleUrls: ['./resume-form-marital-status.component.styl']
})
export class ResumeFormMaritalStatusComponent extends BaseCustomInput {
  constructor(
    public ngControl: NgControl
  ){
    super(ngControl);
  }

  ngOnInit() {
  }

}
