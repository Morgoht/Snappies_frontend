import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { ApolloQueryResult } from '@apollo/client/core';
import { BehaviorSubject, filter, map, Observable } from 'rxjs';
import { DeliveryRound } from '../models/deliveryRound';

@Injectable({
    providedIn: 'root',
})
export default class DeliveryPageService {
    private deliveryRoundsList = new BehaviorSubject<
        Map<string, DeliveryRound>
    >(new Map());
    public deliveryRoundsList$ = this.deliveryRoundsList
        .asObservable()
        .pipe(filter((v) => v !== null));
    private deliveryRounds$: Observable<ApolloQueryResult<any>>;
    // @ts-ignore
    private deliveryRound = new BehaviorSubject<DeliveryRound>(null);
    public deliveryRound$ = this.deliveryRound
        .asObservable()
        .pipe(filter((v) => v !== null));

    constructor(private apollo: Apollo) {}

    public getDeliveriesRounds(): void {
        this.getDeliveriesRoundsQuery()
            .pipe(
                map((response: ApolloQueryResult<any>) => {
                    if (!response.loading) {
                        const deliveryRounds =
                            response.data?.allDeliveryRounds || [];

                        // Create a new map with documentID as keys
                        const deliveryRoundsMap = new Map<
                            string,
                            DeliveryRound
                        >();
                        deliveryRounds.forEach((round: DeliveryRound) => {
                            // Assuming documentID is a property of DeliveryRound
                            deliveryRoundsMap.set(round.documentId, round);
                        });

                        console.log(deliveryRoundsMap);
                        return deliveryRoundsMap;
                    }

                    // Add a return statement here for the case where !response.loading
                    return new Map<string, DeliveryRound>(); // You can return an empty map or handle it differently based on your needs
                }),
            )
            .subscribe((deliveryRoundsMap: Map<string, DeliveryRound>) => {
                if (deliveryRoundsMap) {
                    this.deliveryRoundsList.next(deliveryRoundsMap);
                }
            });
    }

    private getDeliveriesRoundsQuery(): Observable<ApolloQueryResult<any>> {
        this.deliveryRounds$ = this.apollo.query({
            query: gql`
                query {
                    allDeliveryRounds {
                        deliveries {
                            delivered
                            documentId
                            order {
                                documentId
                                daycare {
                                    address
                                    documentId
                                    email
                                    name
                                    phoneNumber
                                }
                                orderLines {
                                    article {
                                        documentId
                                        name
                                        reserve
                                        storageType
                                    }
                                    documentId
                                    quantity
                                }
                            }
                        }
                        documentId
                        driver {
                            phoneNumber
                            documentId
                            email
                            lastname
                            name
                            password
                            username
                        }
                        name
                        roundEnded
                    }
                }
            `,
        });
        return this.deliveryRounds$;
    }
}
