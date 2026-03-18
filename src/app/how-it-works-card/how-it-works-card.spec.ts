import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowItWorksCard } from './how-it-works-card';

describe('HowItWorksCard', () => {
  let component: HowItWorksCard;
  let fixture: ComponentFixture<HowItWorksCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowItWorksCard],
    }).compileComponents();

    fixture = TestBed.createComponent(HowItWorksCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
