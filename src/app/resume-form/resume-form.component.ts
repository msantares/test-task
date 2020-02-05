import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-resume-form',
  templateUrl: './resume-form.component.html',
  styleUrls: ['./resume-form.component.styl']
})
export class ResumeFormComponent implements OnInit {

  resumeForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
  }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.resumeForm = this.fb.group({
      name: [null],
      sex: [null],
      birthdate: [null],
      martialStatus: [null],
      childrenCount: [null],
      email: [null],
      comment: [null],
    });

    console.log(this.resumeForm);
  }
}
