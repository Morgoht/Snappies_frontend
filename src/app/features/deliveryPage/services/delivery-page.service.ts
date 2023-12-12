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

    private deliveryRounds$: Observable<ApolloQueryResult<any>>;

    // Nouveau BehaviorSubject pour stocker un objet DeliveryRound
    // @ts-ignore
    private deliveryRound = new BehaviorSubject<DeliveryRound>(null);
    public deliveryRound$ = this.deliveryRound
        .asObservable()
        .pipe(filter((v) => v !== null));

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
        this.deliveryRounds$ = this.apollo.query({
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
        return this.deliveryRounds$;
    }

     // Nouvelles méthodes pour définir et récupérer l'objet DeliveryRound
     public setDeliveryRoundById(deliveryRoundId: string): void {
        // Obtenez la liste actuelle des tours de livraison
        const deliveryRoundsList = this.deliveryRoundsList.value;
    
        // Recherchez l'élément avec l'ID correspondant dans la liste
        const foundDeliveryRound = deliveryRoundsList.find(
            (round) => round.documentId === deliveryRoundId
        );
    
        // Mettez à jour le BehaviorSubject avec l'élément trouvé
        if(foundDeliveryRound) {
            this.deliveryRound.next(foundDeliveryRound);
        }
    }

    public getDeliveryRound(): DeliveryRound | null {
        return this.deliveryRound.value;
    }
}
