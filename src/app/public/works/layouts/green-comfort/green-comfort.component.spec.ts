import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenComfortComponent } from './green-comfort.component';

describe('GreenComfortComponent', () => {
  let component: GreenComfortComponent;
  let fixture: ComponentFixture<GreenComfortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreenComfortComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreenComfortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
