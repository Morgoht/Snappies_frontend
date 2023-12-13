import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import DeliveryPageService from '../../services/delivery-page.service';
import { DeliveryRoundClass } from '../../models/deliveryRoundClass';
import { DeliveryClass } from '../../models/deliveryClass';

@Component({
  selector: 'app-delivery-detail-page',
  templateUrl: './delivery-detail-page.component.html',
  styleUrls: ['./delivery-detail-page.component.scss'],
})
export class DeliveryDetailPageComponent implements OnInit {
  deliveryRounds$: Observable<Map<string,DeliveryRoundClass>> = this.deliveryPageService.deliveryRoundsList$;
  deliveryRound: DeliveryRoundClass | undefined;
  delivery: DeliveryClass | undefined;

  constructor(private route: ActivatedRoute, private deliveryPageService: DeliveryPageService, private router : Router) {}

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
}
