import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import DeliveryPageService from '../../services/delivery-page.service';

@Component({
  selector: 'app-order-line-dialog-page',
  templateUrl: './order-line-dialog-page.component.html',
  styleUrls: ['./order-line-dialog-page.component.scss']
})
export class OrderLineDialogPageComponent {
  orderLineForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<OrderLineDialogPageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private deliveryPageService: DeliveryPageService,
  ) {
    this.orderLineForm = this.fb.group({
      // Ajoutez les champs du formulaire en fonction de votre modèle de données
      newValue: [this.data.quantity, Validators.required],
      // Ajoutez d'autres champs si nécessaire
    });
  }

  onSaveClick(orderLineId: string): void {
    if (this.orderLineForm.valid) {
      // Vous pouvez traiter les données du formulaire ici
      const updatedQuantity = this.orderLineForm.value.newValue;

      this.deliveryPageService.updateOrderLine(orderLineId, updatedQuantity).subscribe(
        (result) => {
            window.location.reload();
        },
        (error) => {
            console.error(error);
        },
    );

      
      console.log()
      // Fermez la boîte de dialogue et renvoyez les données mises à jour
      this.dialogRef.close(updatedQuantity);
    }
  }

  onDeleteClick(orderLineId: string): void {
    // Handle delete logic here
    this.deliveryPageService.deleteOrderLine(orderLineId).subscribe(
      (result) => {
          window.location.reload();
      },
      (error) => {
          console.error(error);
      },
  );
    console.log('Delete Clicked');
    this.dialogRef.close('delete'); // You can pass a specific value to indicate deletion
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
