import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryRoundCreationPageComponent } from './delivery-round-creation-page.component';

describe('DeliveryRoundCreationPageComponent', () => {
  let component: DeliveryRoundCreationPageComponent;
  let fixture: ComponentFixture<DeliveryRoundCreationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeliveryRoundCreationPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeliveryRoundCreationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
