import { Component } from '@angular/core';
import DeliveryPageService from '../../services/delivery-page.service';
import { Observable } from 'rxjs';
import { DeliveryRound } from '../../models/deliveryRound';


@Component({
  selector: 'app-delivery-page',
  templateUrl: './delivery-page.component.html',
})
export class DeliveryPageComponent {
  deliveryRounds$: Observable<DeliveryRound[]> =
        this.deliveryPageService.deliveryRoundsList$;
        
  constructor(private deliveryPageService: DeliveryPageService) {}
}
