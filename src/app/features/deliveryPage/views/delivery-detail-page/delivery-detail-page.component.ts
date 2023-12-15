import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import DeliveryPageService from '../../services/delivery-page.service';
import { DeliveryRoundClass } from '../../models/deliveryRoundClass';
import { DeliveryClass } from '../../models/deliveryClass';
import { MatDialog } from '@angular/material/dialog';
import { EditOrderLineDialogPageComponent } from '../edit-order-line-dialog-page/edit-order-line-dialog-page.component';
import { CreateOrderLineDialogPageComponent } from '../create-order-line-dialog-page/create-order-line-dialog-page.component';

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

    goBack() {
        window.history.back();
    }

    openEditPopup(orderLineId: string ,quantity: number): void {
      // Utiliser le composant de dialogue pour ouvrir le popup avec les données de la ligne
      const dialogRef = this.dialog.open(EditOrderLineDialogPageComponent, {
          width: '400px', // Ajustez la largeur selon vos besoins
          data: { orderLineId: orderLineId, quantity: quantity }
      });

      // Vous pouvez écouter les événements du dialogue si nécessaire
      dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed', result);
      });
  }

  openCreateOrderLineDialog(): void {
    const dialogRef = this.dialog.open(CreateOrderLineDialogPageComponent, {
      width: '400px', // Ajustez la largeur en fonction de vos besoins
    });

    // Vous pouvez ajouter une logique supplémentaire ici pour traiter les résultats de la boîte de dialogue si nécessaire
  }
}
