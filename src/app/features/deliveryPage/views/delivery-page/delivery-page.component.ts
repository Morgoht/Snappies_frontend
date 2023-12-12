import { Component, OnInit } from '@angular/core';
import DeliveryPageService from '../../services/delivery-page.service';
import { Observable } from 'rxjs';
import { DeliveryRound } from '../../models/deliveryRound';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-delivery-page',
  templateUrl: './delivery-page.component.html',
})
export class DeliveryPageComponent implements OnInit{
    deliveryRounds$: Observable<Map<String,DeliveryRound>> =
        this.deliveryPageService.deliveryRoundsList$;

    constructor(private deliveryPageService: DeliveryPageService,private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.deliveryPageService.getDeliveriesRounds();

    }


}
