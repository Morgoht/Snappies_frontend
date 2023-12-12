import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DELIVERYROUNDSPAGEPATH } from 'src/app/shared/constants/path.constant';
import { DELIVERYPAGEPATH } from 'src/app/shared/constants/path.constant';

import DeliveryPageService from '../../services/delivery-page.service';

@Component({
    selector: 'app-delivery-rounds-page',
    templateUrl: './delivery-rounds-page.component.html',
    styleUrls: ['./delivery-rounds-page.component.scss'],
})
export class DeliveryRoundsPageComponent {
    deliveryRoundsList$ = this.deliveryPageService.deliveryRoundsList$;
    constructor(
        private router: Router,
        private deliveryPageService: DeliveryPageService,
    ) {}


    afficherDetailsTournee(deliveryRoundID: string) {
        this.router.navigate([DELIVERYPAGEPATH+"/"+DELIVERYROUNDSPAGEPATH, deliveryRoundID]);
    }
}
