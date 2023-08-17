import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldenOfferComponent } from './golden-offer.component';

describe('GoldenOfferComponent', () => {
  let component: GoldenOfferComponent;
  let fixture: ComponentFixture<GoldenOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoldenOfferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoldenOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
