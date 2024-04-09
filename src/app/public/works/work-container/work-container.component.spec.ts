import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkContainerComponent } from './work-container.component';

describe('WorkContainerComponent', () => {
  let component: WorkContainerComponent;
  let fixture: ComponentFixture<WorkContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
