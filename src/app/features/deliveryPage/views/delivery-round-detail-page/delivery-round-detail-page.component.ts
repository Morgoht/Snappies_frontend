import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DeliveryRound } from '../../models/deliveryRound';
import DeliveryPageService from '../../services/delivery-page.service';
import { Observable } from 'rxjs';
import {
    DELIVERYALLARTICLESPATH,
    DELIVERYDETAILPAGEPATH,
    DELIVERYPAGEPATH,
} from 'src/app/shared/constants/path.constant';
import { DeliveryRoundClass } from '../../models/deliveryRoundClass';
import { MatDialog } from '@angular/material/dialog';
import { EditDeliveryRoundPageComponent } from '../edit-delivery-page-dialog/edit-delivery-round-page/edit-delivery-round-page.component';
import { LoadingService } from 'src/app/shared/service/loading.service';

@Component({
    selector: 'app-delivery-round-detail-page',
    templateUrl: './delivery-round-detail-page.component.html',
    styleUrls: ['./delivery-round-detail-page.component.scss'],
})
export class DeliveryRoundDetailPageComponent implements OnInit {
    userChoice$ = this.loadingService.userChoice$;
    deliveryRounds$: Observable<Map<string, DeliveryRoundClass>> =
        this.deliveryPageService.deliveryRoundsList$;
    deliveryRound: DeliveryRoundClass;
    deliveryRoundFindById: DeliveryRound | undefined;

    deliveryRoundID: string;
    deliveryRoundNmae: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private deliveryPageService: DeliveryPageService,
        private loadingService: LoadingService,
        private dialog:MatDialog
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
                },
            );
        });
    }
    
    showDeliveryDetails(deliveryId: string) {
        // Naviguer vers la page de détails de livraison avec le documentId
        this.router.navigate([
            DELIVERYPAGEPATH +
                '/' +
                DELIVERYDETAILPAGEPATH +
                '/' +
                this.deliveryRoundID +
                '/' +
                deliveryId,
        ]);
    }
    goBack() {
        window.history.back();
    }

    openEditDialog(): void {
        const dialogRef = this.dialog.open(EditDeliveryRoundPageComponent, {
            width: '400px', // Set the width according to your design
            data: {deliveryRoundId: this.deliveryRoundID, deliveryRoundName : this.deliveryRound.name
            },
        });

        dialogRef.afterClosed().subscribe((result) => {
            if (result === 'save') {
                // Handle save logic
            } else if (result === 'delete') {
                console.log("DELETE TEST")

                // Handle delete logic
            } else {
                // Handle cancel logic or do nothing
            }
        });
    }

    // Nouvelle fonction pour la navigation vers un autre composant
    goToAllArticlesPerDeliveryRoundID() {
        // Utilisez le service Router pour naviguer vers le composant souhaité
        this.router.navigate([
            DELIVERYPAGEPATH,
            DELIVERYALLARTICLESPATH,
            this.deliveryRoundID,
        ]);
    }

    toggleDeliveryStatus(deliveryId: string) {
        if (
            this.deliveryRound.deliveriesMap.get(deliveryId)!.delivered == false
        ) {
            this.deliveryPageService
                .toggleDeliveryStatusCompleted(deliveryId)
                .subscribe(
                    (result) => {
                        this.deliveryRound.deliveriesMap.get(
                            deliveryId,
                        )!.delivered = true;
                    },
                    (error) => {
                        console.error(error);
                    },
                );
        } else {
            this.deliveryPageService
                .toggleDeliveryStatusUncompleted(deliveryId)
                .subscribe(
                    (result) => {
                        this.deliveryRound.deliveriesMap.get(
                            deliveryId,
                        )!.delivered = false;
                    },
                    (error) => {
                        console.error(error);
                    },
                );
        }
    }
}
