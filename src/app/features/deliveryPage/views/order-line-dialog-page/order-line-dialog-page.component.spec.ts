import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderLineDialogPageComponent } from './order-line-dialog-page.component';

describe('OrderLineDialogPageComponent', () => {
  let component: OrderLineDialogPageComponent;
  let fixture: ComponentFixture<OrderLineDialogPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderLineDialogPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrderLineDialogPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
