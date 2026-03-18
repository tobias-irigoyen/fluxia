import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingCardComponent } from './pricing-card.component';

describe('PricingCard', () => {
  let component: PricingCardComponent;
  let fixture: ComponentFixture<PricingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricingCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PricingCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
