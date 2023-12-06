import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryRoundsPageComponent } from './delivery-rounds-page.component';

describe('DeliveryRoundsPageComponent', () => {
  let component: DeliveryRoundsPageComponent;
  let fixture: ComponentFixture<DeliveryRoundsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeliveryRoundsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeliveryRoundsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
