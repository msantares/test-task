import { Component, OnInit } from '@angular/core';
import {MatFormFieldControl} from '@angular/material/form-field';
import {BaseCustomInput} from "../base-custom-input";
import {NgControl} from "@angular/forms";

@Component({
  selector: 'app-resume-form-children-count',
  templateUrl: './resume-form-children-count.component.html',
  providers: [{provide: MatFormFieldControl, useExisting: ResumeFormChildrenCountComponent}],
})
export class ResumeFormChildrenCountComponent extends BaseCustomInput {
  constructor(
    public ngControl: NgControl
  ){
    super(ngControl);
  }

  _handleInput(event): void {
    console.log(event);
    console.log(this);
    this.onChange(event.data);
  }
}
