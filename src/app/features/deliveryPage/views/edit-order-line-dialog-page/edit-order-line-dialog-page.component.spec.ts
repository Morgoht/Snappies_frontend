import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOrderLineDialogPageComponent } from './edit-order-line-dialog-page.component';

describe('OrderLineDialogPageComponent', () => {
  let component: EditOrderLineDialogPageComponent;
  let fixture: ComponentFixture<EditOrderLineDialogPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditOrderLineDialogPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditOrderLineDialogPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
