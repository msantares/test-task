import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ResumeFormComponent } from './resume-form/resume-form.component';
import { ResumeDataComponent } from './resume-data/resume-data.component';
import { ResumeFormNameComponent } from './resume-form/resume-form-name/resume-form-name.component';
import { ResumeFormSexComponent } from './resume-form/resume-form-sex/resume-form-sex.component';
import { ResumeFormBirthdateComponent } from './resume-form/resume-form-birthdate/resume-form-birthdate.component';
import { ResumeFormMaritalStatusComponent } from './resume-form/resume-form-marital-status/resume-form-marital-status.component';
import { ResumeFormChildrenCountComponent } from './resume-form/resume-form-children/resume-form-children-count.component';
import { ResumeFormEmailComponent } from './resume-form/resume-form-email/resume-form-email.component';
import { ResumeFormCommentComponent } from './resume-form/resume-form-comment/resume-form-comment.component';
import { ResumeFormSaveButtonComponent } from './resume-form/resume-form-save-button/resume-form-save-button.component';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatRadioModule, MatSelectModule} from "@angular/material";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

const angularMaterialModules = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule
];

@NgModule({
  declarations: [
    AppComponent,
    ResumeFormComponent,
    ResumeDataComponent,
    ResumeFormNameComponent,
    ResumeFormSexComponent,
    ResumeFormBirthdateComponent,
    ResumeFormMaritalStatusComponent,
    ResumeFormChildrenCountComponent,
    ResumeFormEmailComponent,
    ResumeFormCommentComponent,
    ResumeFormSaveButtonComponent
  ],
  imports: [
    ...angularMaterialModules,
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
