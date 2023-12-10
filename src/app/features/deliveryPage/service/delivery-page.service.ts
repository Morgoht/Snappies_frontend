import { Injectable, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { BehaviorSubject, filter, Observable } from 'rxjs';
import { DeliveryRound } from '../models/delivery-round';
import {ObservableCollection} from '../models/ObservableCollection';
import { skipWhile } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export default class DeliveryPageService {
    // @ts-ignore
    private deliveryRoundsList = new BehaviorSubject<DeliveryRound[]>(null);
    public deliveryRoundsList$ = this.deliveryRoundsList.pipe(filter(v => v !== null));

    private deliveryRounds : DeliveryRound[]
    deliveryRound$: Observable<DeliveryRound[]>;

  constructor(private apollo: Apollo) { }
    public getDeliveriesRounds(): void {
        this.getDeliveriesRoundsQuery()
            .pipe(
                skipWhile(value => value === null)
            ).subscribe((value: DeliveryRound[]) => {
            this.deliveryRoundsList.next(value);
        })

    }

    private getDeliveriesRoundsQuery(): Observable<DeliveryRound[]> {
        this.deliveryRound$ =this.apollo.query<unknown>({
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

    public getDeliveriesRoundsbis () : void {
        this.deliveryRoundsList.next(this.deliveryRound$)
        /*this.deliveryRounds = [
            {
                id: 1,
                name: 'Tournée A',
                deliveries: [
                    { id: 101, name: 'Les Petites Fleurs' },
                    { id: 102, name: 'Little Planet' },
                    { id: 103, name: 'Les Petits Oursons' },
                    { id: 104, name: 'BabyBoom' },
                    { id: 105, name: 'Société XYZ' },
                    { id: 106, name: 'ABC Livraisons' },
                    { id: 107, name: 'Sunshine Co.' },
                ],
            },
            {
                id: 2,
                name: 'Tournée B',
                deliveries: [
                    { id: 201, name: 'Fleurs du Matin' },
                    { id: 202, name: 'Green Garden' },
                    { id: 203, name: 'Petits Lapins' },
                    { id: 204, name: 'Joyful Kids' },
                    { id: 205, name: 'Nature Harmony' },
                    { id: 206, name: 'Fresh Delights' },
                    { id: 207, name: 'Sunset Delicacies' },
                ],
            },
            {
                id: 3,
                name: 'Tournée C',
                deliveries: [
                    { id: 301, name: 'Blossom Dreams' },
                    { id: 302, name: 'Happy Meadows' },
                    { id: 303, name: 'Tiny Stars' },
                    { id: 304, name: 'Dreamy Babies' },
                    { id: 305, name: 'Sweet Moments' },
                    { id: 306, name: 'Rainbow Wonders' },
                    { id: 307, name: 'Joyful Tots' },
                ],
            },
            {
                id: 4,
                name: 'Tournée D',
                deliveries: [
                    { id: 401, name: 'Morning Sunshine' },
                    { id: 402, name: 'Natures Gift' },
                    { id: 403, name: 'Cuddly Companions' },
                    { id: 404, name: 'Baby Bliss' },
                    { id: 405, name: 'Harmony Haven' },
                    { id: 406, name: 'Lullaby Lane' },
                    { id: 407, name: 'Serene Moments' },
                ],
            }

        ];

         */



    }
}
