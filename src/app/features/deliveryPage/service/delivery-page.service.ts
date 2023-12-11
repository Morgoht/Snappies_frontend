import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { ApolloQueryResult } from '@apollo/client/core';
import { BehaviorSubject, filter, Observable } from 'rxjs';
import { DeliveryRound } from '../models/deliveryRound';

@Injectable({
    providedIn: 'root',
})
export default class DeliveryPageService {
    private deliveryRoundsList = new BehaviorSubject<DeliveryRound[]>([]);
    public deliveryRoundsList$ = this.deliveryRoundsList
        .asObservable()
        .pipe(filter((v) => v !== null));

    private deliveryRound$: Observable<ApolloQueryResult<any>>;

    constructor(private apollo: Apollo) {}

    public getDeliveriesRounds(): void {
        this.getDeliveriesRoundsQuery().subscribe(
            (response: ApolloQueryResult<any>) => {
                if (!response.loading) {
                    const deliveryRounds =
                        response.data?.allDeliveryRounds || [];

                    // Create a new array with reversed order
                    const reversedDeliveryRounds = [
                        ...deliveryRounds,
                    ].reverse();

                    console.log(reversedDeliveryRounds);
                    this.deliveryRoundsList.next(reversedDeliveryRounds);
                }
            },
        );
    }

    private getDeliveriesRoundsQuery(): Observable<ApolloQueryResult<any>> {
        this.deliveryRound$ = this.apollo.query({
            query: gql`
                query {
                    allDeliveryRounds {
                        documentId
                        name
                        deliveries {
                            documentId
                            order {
                                documentId
                                orderLines {
                                    documentId
                                    article {
                                        documentId
                                        name
                                        reserve
                                        storageType
                                    }
                                    quantity
                                }
                                daycare {
                                    documentId
                                    name
                                    email
                                    address
                                    phoneNumber
                                }
                            }
                            driver {
                                documentId
                                name
                                lastname
                                username
                                email
                                phoneNumber
                            }
                            delivered
                        }
                        roundEnded
                    }
                }
            `,
        });
        return this.deliveryRound$;
    }
}
