import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DeliveryRound } from '../../models/deliveryRound';
import DeliveryPageService from '../../services/delivery-page.service';
import { Delivery } from '../../models/delivery';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-delivery-round-detail-page',
    templateUrl: './delivery-round-detail-page.component.html',
    styleUrls: ['./delivery-round-detail-page.component.scss'],
})
export class DeliveryRoundDetailPageComponent implements OnInit {
    deliveryRounds$: Observable<Map<string,DeliveryRound>> = this.deliveryPageService.deliveryRoundsList$;
    deliveryRound: DeliveryRound
    deliveryRoundFindById: DeliveryRound | undefined;

    constructor(
        private route: ActivatedRoute,

        private router: Router,
        private deliveryPageService: DeliveryPageService,
    ) {}

    ngOnInit() {
        this.route.params.subscribe((params) => {
            const deliveryRoundID = params['deliveryRoundID'].toString();
            this.deliveryRounds$.subscribe((deliveryRoundsMap: Map<string, DeliveryRound>) => {

                this.deliveryRound = deliveryRoundsMap.get(deliveryRoundID)!;
                console.log(this.deliveryRound);
            });
        });
    }
    afficherDetailsLivraison(livraisonId: string) {
        // Navigate to the delivery details page
        // this.router.navigate(['/delivery-details', livraisonId]);
    }
}
