import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElegantCareComponent } from './elegant-care.component';

describe('ElegantCareComponent', () => {
  let component: ElegantCareComponent;
  let fixture: ComponentFixture<ElegantCareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElegantCareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElegantCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
