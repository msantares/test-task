import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeFormSaveButtonComponent } from './resume-form-save-button.component';

describe('ResumeFormSaveButtonComponent', () => {
  let component: ResumeFormSaveButtonComponent;
  let fixture: ComponentFixture<ResumeFormSaveButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeFormSaveButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeFormSaveButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
