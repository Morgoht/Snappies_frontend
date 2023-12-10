import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DELIVERYROUNDSPAGEPATH } from 'src/app/shared/constants/path.constant';
import DeliveryPageService from '../../service/delivery-page.service'
@Component({
  selector: 'app-delivery-rounds-page',
  templateUrl: './delivery-rounds-page.component.html',
  styleUrl: './delivery-rounds-page.component.scss'
})
export class DeliveryRoundsPageComponent implements OnInit{

    deliveryRound$ = this.deliveryPageService.deliveryRoundsList$; // Assurez-vous de définir correctement le type de vos données


  constructor(private router: Router, private deliveryPageService : DeliveryPageService) {}

    ngOnInit(): void {
        this.deliveryPageService.getDeliveriesRounds()
    }

  afficherDetailsTournee(deliveryRoundID: any) {
    this.router.navigate([DELIVERYROUNDSPAGEPATH, deliveryRoundID]);
  }
}
