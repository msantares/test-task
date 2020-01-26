import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeFormBirthdateComponent } from './resume-form-birthdate.component';

describe('ResumeFormBirthdateComponent', () => {
  let component: ResumeFormBirthdateComponent;
  let fixture: ComponentFixture<ResumeFormBirthdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeFormBirthdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeFormBirthdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
