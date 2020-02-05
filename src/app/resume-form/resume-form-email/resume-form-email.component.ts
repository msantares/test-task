import { Component, OnInit } from '@angular/core';
import {BaseCustomInput} from "../base-custom-input";
import {NgControl} from "@angular/forms";
import {MatFormFieldControl} from "@angular/material";

@Component({
  selector: 'app-resume-form-email',
  templateUrl: './resume-form-email.component.html',
  providers: [{provide: MatFormFieldControl, useExisting: ResumeFormEmailComponent}],
  styleUrls: ['./resume-form-email.component.styl']
})
export class ResumeFormEmailComponent  extends BaseCustomInput {
  constructor(
    public ngControl: NgControl
  ){
    super(ngControl);
  }

  ngOnInit() {
  }

}
