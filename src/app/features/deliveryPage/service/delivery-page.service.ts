import { Injectable, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { BehaviorSubject, filter, Observable } from 'rxjs';
import { DeliveryRound } from '../models/delivery-round';
import { skipWhile } from 'rxjs/operators';
import { GraphQLResponse } from '../models/graphql-types';

@Injectable({
  providedIn: 'root'
})
export default class DeliveryPageService {
    // @ts-ignore
    private deliveryRoundsList = new BehaviorSubject<DeliveryRound[]>(null);
    public deliveryRoundsList$ = this.deliveryRoundsList.asObservable().pipe(filter(v => v !== null));

    private deliveryRound$: Observable<any>;

  constructor(private apollo: Apollo) { }
    public getDeliveriesRounds(): void {
        // @ts-ignore
        this.getDeliveriesRoundsQuery().subscribe((response: GraphQLResponse) => {
            if (!response.loading) {
                const deliveryRounds = response.data?.allDeliveryRounds || [];

                // Create a new array with reversed order
                const reversedDeliveryRounds = [...deliveryRounds].reverse();

                console.log(reversedDeliveryRounds);
                this.deliveryRoundsList.next(reversedDeliveryRounds);
            }
        });
    }

    private getDeliveriesRoundsQuery(): Observable<DeliveryRound[]> {
        this.deliveryRound$ =this.apollo.query({
            query: gql`
                query {
                    allDeliveryRounds {
                        # Specify the fields you want to retrieve
                        documentId
                        name
                        deliveries {
                            documentId
                            driver{
                                documentId
                            }
                            order{
                                documentId
                            }
                        }
                    }
                }
            `,
        });
      return this.deliveryRound$;
    }
}
