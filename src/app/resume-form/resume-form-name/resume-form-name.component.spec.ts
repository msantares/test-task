import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeFormNameComponent } from './resume-form-name.component';

describe('ResumeFormNameComponent', () => {
  let component: ResumeFormNameComponent;
  let fixture: ComponentFixture<ResumeFormNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeFormNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeFormNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
