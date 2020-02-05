import { Component, OnInit } from '@angular/core';
import {BaseCustomInput} from "../base-custom-input";
import {NgControl} from "@angular/forms";
import {MatFormFieldControl} from "@angular/material";

@Component({
  selector: 'app-resume-form-sex',
  templateUrl: './resume-form-sex.component.html',
  providers: [{provide: MatFormFieldControl, useExisting: ResumeFormSexComponent}],
  styleUrls: ['./resume-form-sex.component.styl']
})
export class ResumeFormSexComponent extends BaseCustomInput {
  constructor(
    public ngControl: NgControl
  ){
    super(ngControl);
  }

  ngOnInit() {
  }

}
