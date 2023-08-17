import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IlldyComponent } from './illdy.component';

describe('IlldyComponent', () => {
  let component: IlldyComponent;
  let fixture: ComponentFixture<IlldyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IlldyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IlldyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
