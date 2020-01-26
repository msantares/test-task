import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeFormEmailComponent } from './resume-form-email.component';

describe('ResumeFormEmailComponent', () => {
  let component: ResumeFormEmailComponent;
  let fixture: ComponentFixture<ResumeFormEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeFormEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeFormEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
