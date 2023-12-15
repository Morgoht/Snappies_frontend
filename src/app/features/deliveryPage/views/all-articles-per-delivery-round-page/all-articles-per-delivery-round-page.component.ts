import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DeliveryRoundClass } from '../../models/deliveryRoundClass';
import { DeliveryRound } from '../../models/deliveryRound';
import { ActivatedRoute, Router } from '@angular/router';
import DeliveryPageService from '../../services/delivery-page.service';

@Component({
    selector: 'app-all-articles-per-delivery-round-page',
    templateUrl: './all-articles-per-delivery-round-page.component.html',
    styleUrl: './all-articles-per-delivery-round-page.component.scss',
})
export class AllArticlesPerDeliveryRoundPageComponent {
    deliveryRounds$: Observable<Map<string, DeliveryRoundClass>> =
        this.deliveryPageService.deliveryRoundsList$;
    deliveryRound: DeliveryRoundClass;
    deliveryRoundFindById: DeliveryRound | undefined;
    deliveryRoundID: string;
    articleQuantityMap: Map<string, number> = new Map();
    articleReserveMap: Map<string, number> = new Map();

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private deliveryPageService: DeliveryPageService,
    ) {}

    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.deliveryRoundID = params['deliveryRoundID'].toString();
            this.deliveryRounds$.subscribe(
                (deliveryRoundsMap: Map<string, DeliveryRoundClass>) => {
                    this.deliveryRound = deliveryRoundsMap.get(
                        this.deliveryRoundID,
                    )!;
                    console.log(this.deliveryRound);

                    this.deliveryRound.deliveriesMap.forEach((deliveryRnd) => {
                        deliveryRnd.order.orderLinesMap.forEach((orderLine) => {
                            const articleName = orderLine.article.name;
                            const quantity = orderLine.quantity;
                            const storageType = orderLine.article.storageType;

                            let key: string = '';

                            // Check storage type
                            if (storageType === 'Unite') {
                                // If storage type is "Unite", add "(Unite(s))" to the article name
                                key = `${articleName} (Unite(s))`;
                            } else if (storageType === 'Caisse') {
                                // If storage type is "Caisse", add "(Caisse(s))" to the article name
                                key = `${articleName} (Caisse(s))`;
                            }

                            // Check if the key is already in the map
                            if (this.articleQuantityMap.has(key)) {
                                // If yes, update the quantity
                                this.articleQuantityMap.set(
                                    key,
                                    this.articleQuantityMap.get(key)! +
                                        quantity,
                                );
                            } else {
                                // If no, add a new entry
                                this.articleQuantityMap.set(key, quantity);
                            }
                            if (!this.articleReserveMap.has(key)) {
                                this.articleReserveMap.set(
                                    key,
                                    orderLine.article.reserve,
                                );
                            }
                        });
                    });

                    this.articleQuantityMap.forEach((quantity, key) => {
                        let newQuantity = quantity;

                        if (this.articleReserveMap.has(key)) {
                            // Retrieve the reserve percentage
                            const reserve = this.articleReserveMap.get(key)!;
                            // Calculate the quantity with the reserve multiplier
                            const reserveMultiplier = 1 + reserve / 100;
                            newQuantity = quantity * reserveMultiplier;
                        }

                        if (key.includes('Caisse(s)')) {
                            // If the key contains "Caisse(s)", round to 1 decimal place
                            newQuantity = parseFloat(newQuantity.toFixed(1));

                            // Retrieve the integer and decimal parts
                            const integerPart = Math.floor(newQuantity);
                            const decimalPart = newQuantity - integerPart;

                            // Round the decimal part to 0 or 0.5 based on proximity to 0.5
                            const roundedDecimalPart =
                                decimalPart <= 0.25
                                    ? 0
                                    : decimalPart <= 0.75
                                      ? 0.5
                                      : 1;

                            // Calculate the new rounded quantity
                            newQuantity = integerPart + roundedDecimalPart;
                        } else {
                            // If the key does not contain "Caisse(s)", round to the nearest integer
                            const integerPart = Math.round(newQuantity);
                            newQuantity = parseFloat(integerPart.toFixed(0));
                        }

                        // Update the map with the new quantity
                        this.articleQuantityMap.set(key, newQuantity);
                    });
                },
            );
        });
    }

    goBack() {
        window.history.back();
    }
}
