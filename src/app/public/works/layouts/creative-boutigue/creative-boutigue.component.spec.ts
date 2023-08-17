import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreativeBoutigueComponent } from './creative-boutigue.component';

describe('CreativeBoutigueComponent', () => {
  let component: CreativeBoutigueComponent;
  let fixture: ComponentFixture<CreativeBoutigueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreativeBoutigueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreativeBoutigueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
