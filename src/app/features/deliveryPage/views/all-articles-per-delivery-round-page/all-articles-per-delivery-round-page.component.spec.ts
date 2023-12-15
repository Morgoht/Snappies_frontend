import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllArticlesPerDeliveryRoundPageComponent } from './all-articles-per-delivery-round-page.component';

describe('AllArticlesPerDeliveryRoundPageComponent', () => {
  let component: AllArticlesPerDeliveryRoundPageComponent;
  let fixture: ComponentFixture<AllArticlesPerDeliveryRoundPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllArticlesPerDeliveryRoundPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllArticlesPerDeliveryRoundPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
