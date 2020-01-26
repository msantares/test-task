import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeFormCommentComponent } from './resume-form-comment.component';

describe('ResumeFormCommentComponent', () => {
  let component: ResumeFormCommentComponent;
  let fixture: ComponentFixture<ResumeFormCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeFormCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeFormCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
