import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../../../models/user';
import DeliveryPageService from '../../../services/delivery-page.service';

@Component({
  selector: 'app-edit-delivery-round-page',
  templateUrl: './edit-delivery-round-page.component.html',
  styleUrl: './edit-delivery-round-page.component.scss'
})
export class EditDeliveryRoundPageComponent {
    selectedOption: string = ''; // Define and initialize as needed

    allDrivers = this.deliveryService.allDrivers$
    constructor(
        public dialogRef: MatDialogRef<EditDeliveryRoundPageComponent>,
        private deliveryService : DeliveryPageService,
        @Inject(MAT_DIALOG_DATA) public data: { deliveryRoundId: string }
    ) {
        this.deliveryService.getAllDrivers()
    }
    onCancelClick(): void {
        this.dialogRef.close();
    }

    onSaveClick(): void {
        // Implement save logic here
        this.dialogRef.close();
    }

    onDeleteClick(): void {
        console.log("TEST DELETE")
        this.deliveryService.deleteDelivery(this.data.deliveryRoundId);

        this.dialogRef.close();
    }

}

