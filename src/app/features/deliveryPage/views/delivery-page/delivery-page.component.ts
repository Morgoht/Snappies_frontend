import { Component, OnInit } from '@angular/core';
import DeliveryPageService from '../../services/delivery-page.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { DeliveryRoundClass } from '../../models/deliveryRoundClass';


@Component({
  selector: 'app-delivery-page',
  templateUrl: './delivery-page.component.html',
  styleUrls: ['./delivery-page.component.scss'],

})
export class DeliveryPageComponent implements OnInit{
    deliveryRounds$: Observable<Map<String,DeliveryRoundClass>> =
        this.deliveryPageService.deliveryRoundsList$;

    constructor(private deliveryPageService: DeliveryPageService,private route: ActivatedRoute, private router: Router) {}

    ngOnInit(): void {
        this.deliveryPageService.getDeliveriesRounds();

    }
    goBack() {
        this.router.navigate(['/']); // Navigate back to the previous page
    }

}
