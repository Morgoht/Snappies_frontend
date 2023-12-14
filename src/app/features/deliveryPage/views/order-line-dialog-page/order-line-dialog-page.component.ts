import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-order-line-dialog-page',
    templateUrl: './order-line-dialog-page.component.html',
    styleUrls: ['./order-line-dialog-page.component.scss']
})
export class OrderLineDialogComponent {
   
  constructor(public dialogRef: MatDialogRef<OrderLineDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: any) {
this.dialogData = { ...this.dialogData, newValue: this.dialogData.value };
}

onSaveClick(): void {
  this.dialogRef.close();
}

onCancelClick(): void {
this.dialogRef.close();
}
}
