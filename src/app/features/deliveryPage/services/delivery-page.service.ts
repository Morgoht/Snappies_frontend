import { Injectable } from '@angular/core';
import { Apollo, gql, MutationResult } from 'apollo-angular';
import { ApolloQueryResult } from '@apollo/client/core';
import { BehaviorSubject, filter, map, Observable ,tap } from 'rxjs';
import { DeliveryRound } from '../models/deliveryRound';
import { DeliveryRoundClass } from '../models/deliveryRoundClass';
import { User } from '../models/user';
import { OrderLine } from '../models/orderLine';

@Injectable({
    providedIn: 'root',
})
export default class DeliveryPageService {
    private deliveryRoundsList = new BehaviorSubject<
        Map<string, DeliveryRoundClass>
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

    private deliveryRoundDisplay = new BehaviorSubject<Map<string, string>>(new Map<string, string>());
    public deliveryRoundDisplay$ = this.deliveryRoundDisplay
        .asObservable()
        .pipe(filter((v) => v !== null));

    // @ts-ignore
    private allDrivers = new BehaviorSubject<User[]>(null);
    public allDrivers$ = this.allDrivers
        .asObservable()
        .pipe(filter((v) => v !== null));


    constructor(private apollo: Apollo) {}

    public getDeliveriesRounds(): void {
        this.getDeliveriesRoundsQuery()
            .pipe(
                map(
                    (
                        response: ApolloQueryResult<any>,
                    ): Map<string, DeliveryRoundClass> => {
                        if (!response.loading) {
                            const deliveryRounds =
                                response.data?.allDeliveryRounds || [];

                            const deliveryRoundsMap = new Map<
                                string,
                                DeliveryRoundClass
                            >();
                            deliveryRounds.forEach((round: DeliveryRound) => {
                                deliveryRoundsMap.set(
                                    round.documentId,
                                    new DeliveryRoundClass(round),
                                );
                            });

                            console.log(deliveryRoundsMap);
                            return deliveryRoundsMap;
                        }

                        return new Map<string, DeliveryRoundClass>();
                    },
                ),
            )
            .subscribe((deliveryRoundsMap: Map<string, DeliveryRoundClass>) => {
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

    public createDeliveryRound(name: string){

        this.apollo
        .mutate({
            mutation: gql`
                mutation CreateDeliveryRound($name: String!, $driverId: ID) {
                    createDeliveryRound(name: $name, driverId: $driverId) {
                        name
                        documentId
                    }
                }
            `,
            variables: {
                name: name,
                driverId: null,
            },
        })
        .subscribe(
            (result) => {
                console.log('Created Delivery Round:');
            },
            (error) => {
                console.error('Mutation error:', error);
            }
        );

    }

    public getAllDrivers(): void {
        this.apollo
        .query<{ allUsers: User[] }>({
            query: gql`
                query {
                    allUsers {
                        documentId
                        email
                        lastname
                        name
                        password
                        phoneNumber
                        username
                    }
                }
            `,
        })
        .subscribe((result: ApolloQueryResult<{ allUsers: User[] }>) => {
            const allDrivers = result.data.allUsers;
            this.allDrivers.next(allDrivers);
        });
    }


    public updateDeliveryRound(deliveryRoundId: string,name: string,driverId: string,roundEnded: boolean): Observable<DeliveryRound> {
        const mutation = gql`
            mutation UpdateDeliveryRound(
                $deliveryRoundId: ID!,
                $name: String,
                $driverId: ID,
                $roundEnded: Boolean
            ) {
                updateDeliveryRound(
                    deliveryRoundId: $deliveryRoundId,
                    name: $name,
                    driverId: $driverId,
                    roundEnded: $roundEnded
                ) {
                    documentId
                    name
                    driver {
                        documentId
                        name
                    }
                    roundEnded
                }
            }
        `;

        return this.apollo
            .mutate<{ updateDeliveryRound: DeliveryRound }>({
                mutation,
                variables: {
                    deliveryRoundId,
                    name,
                    driverId,
                    roundEnded,
                },
            })
            .pipe(map((result) => result.data?.updateDeliveryRound as DeliveryRound));
    }

    public deleteDelivery(documentId:string): void {
        console.log("test DELETE SERVICE ");
        console.log(documentId);

        this.apollo
        .mutate({
            mutation: gql`
                mutation DeleteDeliveryRound($documentId: ID!) {
                    deleteDeliveryRound(deliveryRoundId: $documentId)
                }
            `,
            variables: {
                documentId: documentId,
            },
        })
        .pipe(
            tap((result) => {
                console.log('Mutation Result:', result);
                // Handle the result or side effects if needed
            })
        )
        .subscribe(); // Don't forget to subscribe to trigger the mutation
    }


    public toggleDeliveryStatusCompleted(
        deliveryDocumentId: string,
    ): Observable<any> {
        return this.apollo.mutate({
            mutation: gql`
                mutation ToggleDeliveryStatus($deliveryDocumentId: ID!) {
                    closeDelivery(deliveryId: $deliveryDocumentId)
                }
            `,
            variables: {
                deliveryDocumentId: deliveryDocumentId,
            },
        });
    }

    public toggleDeliveryStatusUncompleted(
        deliveryDocumentId: string,
    ): Observable<any> {
        return this.apollo.mutate({
            mutation: gql`
                mutation ToggleDeliveryStatus($deliveryDocumentId: ID!) {
                    openDelivery(deliveryId: $deliveryDocumentId)
                }
            `,
            variables: {
                deliveryDocumentId: deliveryDocumentId,
            },
        });
    }

    public updateOrderLine(
        orderLineId: string,
        quantity: number,
    ): Observable<OrderLine> {
        return this.apollo
            .mutate({
                mutation: gql`
                    mutation UpdateOrderLine(
                        $orderLineId: ID!
                        $quantity: Float!
                    ) {
                        updateOrderLine(
                            orderLineId: $orderLineId
                            quantity: $quantity
                        ) {
                            documentId
                            article {
                                documentId
                                name
                                reserve
                                storageType
                            }
                            quantity
                        }
                    }
                `,
                variables: {
                    orderLineId: orderLineId,
                    quantity: quantity,
                },
            })
            .pipe(map((result) => result.data as OrderLine));
    }

    public deleteOrderLine(orderLineId: string): Observable<string> {
        return this.apollo
            .mutate({
                mutation: gql`
                    mutation DeleteOrderLine($orderLineId: ID!) {
                        deleteOrderLine(orderLineId: $orderLineId)
                    }
                `,
                variables: {
                    orderLineId: orderLineId,
                },
            })
            .pipe(map((result) => result.data as string));
    }
}
