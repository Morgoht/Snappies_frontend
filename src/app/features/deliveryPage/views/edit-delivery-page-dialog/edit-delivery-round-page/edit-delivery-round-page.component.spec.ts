import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDeliveryRoundPageComponent } from './edit-delivery-round-page.component';

describe('EditDeliveryRoundPageComponent', () => {
  let component: EditDeliveryRoundPageComponent;
  let fixture: ComponentFixture<EditDeliveryRoundPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditDeliveryRoundPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditDeliveryRoundPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
