import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import DeliveryPageService from '../../services/delivery-page.service';
import { DeliveryRoundClass } from '../../models/deliveryRoundClass';
import { DeliveryClass } from '../../models/deliveryClass';
import { MatDialog } from '@angular/material/dialog';
import {OrderLineDialogComponent} from '../order-line-dialog-page/order-line-dialog-page.component';

@Component({
  selector: 'app-delivery-detail-page',
  templateUrl: './delivery-detail-page.component.html',
  styleUrls: ['./delivery-detail-page.component.scss'],
})
export class DeliveryDetailPageComponent implements OnInit {
  deliveryRounds$: Observable<Map<string,DeliveryRoundClass>> = this.deliveryPageService.deliveryRoundsList$;
  deliveryRound: DeliveryRoundClass | undefined;
  delivery: DeliveryClass | undefined;

  constructor(private route: ActivatedRoute, 
    private deliveryPageService: DeliveryPageService, 
    private router : Router,
    private dialog: MatDialog
    ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const deliveryRoundID = params['deliveryRoundID'].toString();
      const deliveryID = params['deliveryID'].toString();

      this.deliveryRounds$.subscribe((deliveryRoundsMap: Map<string, DeliveryRoundClass>) => {
        this.deliveryRound = deliveryRoundsMap.get(deliveryRoundID);

        if (this.deliveryRound) {
          console.log(this.deliveryRound);

          // Vérifiez que this.deliveryRound.deliveriesMap est défini avant d'y accéder
          if (this.deliveryRound.deliveriesMap) {
            this.delivery = this.deliveryRound.deliveriesMap.get(deliveryID);
          }
        }
      });
    });
  }

  editEntry(key: string, currentValue: number) {
    const dialogRef = this.dialog.open(OrderLineDialogComponent, {
      width: '250px',
      data: { key, value: currentValue },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        // Update the value in your data source or perform required actions
        if (this.delivery && this.delivery.order) {
          const orderLineToUpdate = this.delivery.order.orderLinesMap.get(key);
          if (orderLineToUpdate) {
            // Assuming 'result' contains the new value from the dialog
            orderLineToUpdate.quantity = result;

            // Save changes to your data source using your service
            // For example:
            // this.deliveryPageService.updateOrderLine(orderLineToUpdate);
          }
        }
      }
    });
  }

    goBack() {
        window.history.back();
    }
}
