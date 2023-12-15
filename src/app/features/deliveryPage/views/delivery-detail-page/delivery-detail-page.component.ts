import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import DeliveryPageService from '../../services/delivery-page.service';
import { DeliveryRoundClass } from '../../models/deliveryRoundClass';
import { DeliveryClass } from '../../models/deliveryClass';
import { MatDialog } from '@angular/material/dialog';
import { OrderLineDialogPageComponent } from '../order-line-dialog-page/order-line-dialog-page.component';
import { tap } from 'rxjs/operators';


@Component({
  selector: 'app-delivery-detail-page',
  templateUrl: './delivery-detail-page.component.html',
  styleUrls: ['./delivery-detail-page.component.scss'],
})
export class DeliveryDetailPageComponent implements OnInit {
  deliveryRounds$: Observable<Map<string,DeliveryRoundClass>> = this.deliveryPageService.deliveryRoundsList$;
  deliveryRound: DeliveryRoundClass | undefined;
  delivery: DeliveryClass | undefined;

  constructor(private route: ActivatedRoute, private deliveryPageService: DeliveryPageService, private dialog: MatDialog) {}

  ngOnInit() {
  this.route.params.subscribe((params) => {
    const deliveryRoundID = params['deliveryRoundID'].toString();
    const deliveryID = params['deliveryID'].toString();

    this.deliveryRounds$.subscribe((deliveryRoundsMap: Map<string, DeliveryRoundClass>) => {
      this.deliveryRound = deliveryRoundsMap.get(deliveryRoundID);

      if (this.deliveryRound ) {
        // Check if this.deliveryRound.deliveriesMap is defined before accessing it
        if (this.deliveryRound.deliveriesMap) {
          this.delivery = this.deliveryRound.deliveriesMap.get(deliveryID);
          if (this.delivery && this.delivery.order && this.delivery.order.orderLinesMap) {
            for (const orderLineId of this.delivery.order.orderLinesMap.keys()) {
              this.fetchUpdateStatusForOrderLine(orderLineId);
            }
          }
        }
      }
    });
  });
}


    goBack() {
        window.history.back();
    }

    openEditPopup(orderLineId: string ,quantity: number): void {
      // Utiliser le composant de dialogue pour ouvrir le popup avec les données de la ligne
      const dialogRef = this.dialog.open(OrderLineDialogPageComponent, {
          width: '400px', // Ajustez la largeur selon vos besoins
          data: { orderLineId: orderLineId, quantity: quantity }
      });

      // Vous pouvez écouter les événements du dialogue si nécessaire
      dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed', result);
      });
  }

// In your component:
updateStatusMap: { [key: string]: boolean } = {};

// Function to fetch update status for each orderLineId
fetchUpdateStatusForOrderLine(orderLineId: string) {
  this.wasUpdated(orderLineId).subscribe((result: boolean) => {
    this.updateStatusMap[orderLineId] = result;
  });
}

wasUpdated(orderLineId: string): Observable<boolean> {
  return this.deliveryPageService.wasUpdated(orderLineId).pipe(
  
  );
}

}
