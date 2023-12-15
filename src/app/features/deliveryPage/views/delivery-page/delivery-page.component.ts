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
    deliveryRoundDisplay: Map<string,string> = new Map<string, string>();
    deliveryRoundsList$ = this.deliveryPageService.deliveryRoundsList$;

    constructor(private deliveryPageService: DeliveryPageService,private route: ActivatedRoute, private router: Router) {}

    ngOnInit(): void {
        this.deliveryPageService.getDeliveriesRounds();
        this.deliveryRoundsList$.subscribe(value =>
        {
            console.log("test");
            value.forEach(deliveryRound => {
                this.deliveryRoundDisplay.set(deliveryRound.documentId, deliveryRound.name);
                console.log(this.deliveryRoundDisplay.get(deliveryRound.documentId));
            })

        })
    }
    goBack() {
        this.router.navigate(['/']); // Navigate back to the previous page
    }

}
