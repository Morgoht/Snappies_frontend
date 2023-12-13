import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryRoundDetailPageComponent } from './delivery-round-detail-page.component';

describe('DeliveryRoundDetailPageComponent', () => {
  let component: DeliveryRoundDetailPageComponent;
  let fixture: ComponentFixture<DeliveryRoundDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeliveryRoundDetailPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeliveryRoundDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
