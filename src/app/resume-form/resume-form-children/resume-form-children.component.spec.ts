import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeFormChildrenComponent } from './resume-form-children.component';

describe('ResumeFormChildrenComponent', () => {
  let component: ResumeFormChildrenComponent;
  let fixture: ComponentFixture<ResumeFormChildrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeFormChildrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeFormChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
