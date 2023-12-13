import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DeliveryRound } from '../../models/deliveryRound';
import DeliveryPageService from '../../services/delivery-page.service';
import { Observable } from 'rxjs';
import { DELIVERYDETAILPAGEPATH, DELIVERYPAGEPATH, DELIVERYROUNDSPAGEPATH } from 'src/app/shared/constants/path.constant';
import { DeliveryRoundClass } from '../../models/deliveryRoundClass';

@Component({
    selector: 'app-delivery-round-detail-page',
    templateUrl: './delivery-round-detail-page.component.html',
    styleUrls: ['./delivery-round-detail-page.component.scss'],
})
export class DeliveryRoundDetailPageComponent implements OnInit {
    deliveryRounds$: Observable<Map<string,DeliveryRoundClass>> = this.deliveryPageService.deliveryRoundsList$;
    deliveryRound: DeliveryRoundClass
    deliveryRoundFindById: DeliveryRound | undefined;

    deliveryRoundID : string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private deliveryPageService: DeliveryPageService,
    ) {}

    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.deliveryRoundID = params['deliveryRoundID'].toString();
            this.deliveryRounds$.subscribe((deliveryRoundsMap: Map<string, DeliveryRoundClass>) => {

                this.deliveryRound = deliveryRoundsMap.get(this.deliveryRoundID)!;
                console.log(this.deliveryRound);
            });
        });
    }
    afficherDetailsLivraison(deliveryId: string) {
        // Naviguer vers la page de détails de livraison avec le documentId
        this.router.navigate([DELIVERYPAGEPATH + "/" + DELIVERYDETAILPAGEPATH + "/" + this.deliveryRoundID + "/" + deliveryId]);
    }
}
