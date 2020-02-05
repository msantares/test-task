import { Component, OnInit } from '@angular/core';
import {BaseCustomInput} from "../base-custom-input";
import {NgControl} from "@angular/forms";
import {MatFormFieldControl} from "@angular/material";

@Component({
  selector: 'app-resume-form-comment',
  templateUrl: './resume-form-comment.component.html',
  providers: [{provide: MatFormFieldControl, useExisting: ResumeFormCommentComponent}],
})
export class ResumeFormCommentComponent  extends BaseCustomInput {
  constructor(
    public ngControl: NgControl
  ){
    super(ngControl);
  }

  ngOnInit() {
  }
  /*
  /[а-яА-ЯЁё 0-9]/.
  cyrilic symbols - change event and regexp + space and numbers
   */

  formatText(){
   // this.comment.replace(/[^а-яё 0-9]/ig, '');
  }
}
