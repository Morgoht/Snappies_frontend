import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DeliveryRound } from '../../models/deliveryRound';
import DeliveryPageService from '../../service/delivery-page.service';
import { Delivery } from '../../models/delivery';


@Component({
  selector: 'app-delivery-round-detail-page',
  templateUrl: './delivery-round-detail-page.component.html',
  styleUrls: ['./delivery-round-detail-page.component.scss']
})
export class DeliveryRoundDetailPageComponent implements OnInit {

  deliveryRound$ = this.deliveryPageService.deliveryRoundsList$;
  deliveryRoundFindById : DeliveryRound | undefined;
  deliveries: Delivery[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private deliveryPageService: DeliveryPageService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const deliveryRoundID = params['deliveryRoundID'];

      // Use deliveryRoundID as needed
      this.deliveryRound$.subscribe((deliveryRound: DeliveryRound[]) => {
        console.log(deliveryRound);

        // Find deliveries related to deliveryRoundID
        this.deliveryRoundFindById = deliveryRound.find(round => round.documentId === deliveryRoundID);
        this.deliveries = this.deliveryRoundFindById?.deliveries ?? [];
        console.log(this.deliveries);
      });
    });
  }

  afficherDetailsLivraison(livraisonId: string) {
    // Navigate to the delivery details page
    // this.router.navigate(['/delivery-details', livraisonId]);
  }
}
