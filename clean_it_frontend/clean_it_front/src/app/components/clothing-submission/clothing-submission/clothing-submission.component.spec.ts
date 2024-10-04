import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothingSubmissionComponent } from './clothing-submission.component';

describe('ClothingSubmissionComponent', () => {
  let component: ClothingSubmissionComponent;
  let fixture: ComponentFixture<ClothingSubmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClothingSubmissionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClothingSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
