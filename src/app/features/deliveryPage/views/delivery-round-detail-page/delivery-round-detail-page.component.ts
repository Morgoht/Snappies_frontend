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
    deliveryRounds$: Observable<DeliveryRound[]> =
        this.deliveryPageService.deliveryRoundsList$;
    deliveryRound$: Observable<DeliveryRound> =
        this.deliveryPageService.deliveryRound$;
    deliveryRoundFindById: DeliveryRound | undefined;
    deliveries: Delivery[] = [];

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private deliveryPageService: DeliveryPageService,
    ) {}

    ngOnInit() {
        this.route.params.subscribe((params) => {
            const deliveryRoundID = params['deliveryRoundID'].toString();
            console.log('00: ' + deliveryRoundID);

            this.deliveryPageService.setDeliveryRoundById(deliveryRoundID);
            console.log(this.deliveryRound$)

            
            
            /*
            this.deliveryPageService.deliveryRoundsList$.subscribe(
                (deliveryRounds: DeliveryRound[]) => {
                    this.deliveryRoundFindById = deliveryRounds.find(
                        (deliveryRound) =>
                            deliveryRound.documentId === deliveryRoundID,
                    );

                    if (this.deliveryRoundFindById) {
                        this.deliveries = this.deliveryRoundFindById.deliveries;
                        this.deliveryPageService.setDeliveryRound(
                            this.deliveryRoundFindById,
                        );
                    }else{
                        console.log('DeliveryRound non trouvé');
                    }
                },
            );
            */
        });
    }

    afficherDetailsLivraison(livraisonId: string) {
        // Navigate to the delivery details page
        // this.router.navigate(['/delivery-details', livraisonId]);
    }
}
