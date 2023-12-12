import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DELIVERYROUNDSPAGEPATH } from 'src/app/shared/constants/path.constant';
import DeliveryPageService from '../../services/delivery-page.service';

@Component({
    selector: 'app-delivery-rounds-page',
    templateUrl: './delivery-rounds-page.component.html',
    styleUrls: ['./delivery-rounds-page.component.scss'],
})
export class DeliveryRoundsPageComponent implements OnInit {
    deliveryRoundsList$ = this.deliveryPageService.deliveryRoundsList$;
    constructor(
        private router: Router,
        private deliveryPageService: DeliveryPageService,
    ) {}

    ngOnInit(): void {
        this.deliveryPageService.getDeliveriesRounds();
    }

    afficherDetailsTournee(deliveryRoundID: string) {
        // Utilisez le service pour définir l'ID de la tournée
        //this.deliveryPageService.setDeliveryRoundById(deliveryRoundID);
        this.router.navigate([DELIVERYROUNDSPAGEPATH, deliveryRoundID]);
    }
}
