import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeFormSexComponent } from './resume-form-sex.component';

describe('ResumeFormSexComponent', () => {
  let component: ResumeFormSexComponent;
  let fixture: ComponentFixture<ResumeFormSexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeFormSexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeFormSexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
