import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrderLineDialogPageComponent } from './create-order-line-dialog-page.component';

describe('CreateOrderLineDialogPageComponent', () => {
  let component: CreateOrderLineDialogPageComponent;
  let fixture: ComponentFixture<CreateOrderLineDialogPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateOrderLineDialogPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateOrderLineDialogPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
