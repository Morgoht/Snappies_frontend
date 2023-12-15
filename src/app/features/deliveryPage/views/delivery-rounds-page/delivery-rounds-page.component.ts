import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DELIVERYROUNDCREATIONPAGEPATH, DELIVERYROUNDSPAGEPATH } from 'src/app/shared/constants/path.constant';
import { DELIVERYPAGEPATH } from 'src/app/shared/constants/path.constant';
import { LoadingService } from 'src/app/shared/service/loading.service';

import DeliveryPageService from '../../services/delivery-page.service';

@Component({
    selector: 'app-delivery-rounds-page',
    templateUrl: './delivery-rounds-page.component.html',
    styleUrls: ['./delivery-rounds-page.component.scss'],
})
export class DeliveryRoundsPageComponent  {
    userChoice$ = this.loadingService.userChoice$;
    deliveryRoundsList$ = this.deliveryPageService.deliveryRoundsList$;

    constructor(
        private router: Router,
        private deliveryPageService: DeliveryPageService,
        private loadingService: LoadingService,
    ) {}


    showdeliveryRoundDetails(deliveryRoundID: string) {
        this.router.navigate([DELIVERYPAGEPATH+"/"+DELIVERYROUNDSPAGEPATH, deliveryRoundID]);
    }

    goBack() {
        window.history.back();
    }
    redirectToCreationPage(){
        this.router.navigate([DELIVERYPAGEPATH+"/"+DELIVERYROUNDCREATIONPAGEPATH]);
    }
}
