import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeFormMaritalStatusComponent } from './resume-form-marital-status.component';

describe('ResumeFormMaritalStatusComponent', () => {
  let component: ResumeFormMaritalStatusComponent;
  let fixture: ComponentFixture<ResumeFormMaritalStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeFormMaritalStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeFormMaritalStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
