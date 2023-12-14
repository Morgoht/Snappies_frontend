import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DeliveryRoundClass } from '../../models/deliveryRoundClass';
import { DeliveryRound } from '../../models/deliveryRound';
import { ActivatedRoute, Router } from '@angular/router';
import DeliveryPageService from '../../services/delivery-page.service';

@Component({
  selector: 'app-all-articles-per-delivery-round-page',
  templateUrl: './all-articles-per-delivery-round-page.component.html',
  styleUrl: './all-articles-per-delivery-round-page.component.scss'
})
export class AllArticlesPerDeliveryRoundPageComponent {
  deliveryRounds$: Observable<Map<string, DeliveryRoundClass>> =
  this.deliveryPageService.deliveryRoundsList$;
deliveryRound: DeliveryRoundClass;
deliveryRoundFindById: DeliveryRound | undefined;
deliveryRoundID: string;
articleQuantityMap: Map<string, number> = new Map();

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

              this.deliveryRound.deliveriesMap.forEach(deliveryRnd => {
                deliveryRnd.order.orderLinesMap.forEach(orderLine => {
                  const articleName = orderLine.article.name;
                  const quantity = orderLine.quantity;
                  const storageType = orderLine.article.storageType;
              
                  let key: string = '';
              
                  // Check storage type
                  if (storageType === 'unite') {
                    // If storage type is "unite", use the article name as is
                    key = articleName;
                  } else if (storageType === 'coli') {
                    // If storage type is "coli", add "(colis)" to the article name
                    key = `${articleName} (colis)`;
                  }
              
                  // Check if the key is already in the map
                  if (this.articleQuantityMap.has(key)) {
                    // If yes, update the quantity
                    this.articleQuantityMap.set(key, this.articleQuantityMap.get(key)! + quantity);
                  } else {
                    // If no, add a new entry
                    this.articleQuantityMap.set(key, quantity);
                  }
                });
              });
              console.log(this.articleQuantityMap);
          },
      );
  });
}

goBack() {
  window.history.back();
}
}