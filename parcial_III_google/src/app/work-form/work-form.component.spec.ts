import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkFormComponent } from './work-form.component';

describe('WorkFormComponent', () => {
  let component: WorkFormComponent;
  let fixture: ComponentFixture<WorkFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkFormComponent]
    });
    fixture = TestBed.createComponent(WorkFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
