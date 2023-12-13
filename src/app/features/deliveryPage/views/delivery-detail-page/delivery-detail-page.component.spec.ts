import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryDetailPageComponent } from './delivery-detail-page.component';

describe('DeliveryDetailPageComponent', () => {
  let component: DeliveryDetailPageComponent;
  let fixture: ComponentFixture<DeliveryDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeliveryDetailPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeliveryDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
