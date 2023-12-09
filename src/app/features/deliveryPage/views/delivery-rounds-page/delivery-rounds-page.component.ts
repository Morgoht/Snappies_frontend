import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DELIVERYROUNDSPAGEPATH } from 'src/app/shared/constants/path.constant';

@Component({
  selector: 'app-delivery-rounds-page',
  templateUrl: './delivery-rounds-page.component.html',
  styleUrl: './delivery-rounds-page.component.scss'
})
export class DeliveryRoundsPageComponent {
  deliveryRounds = [
    { id: 1, name: 'Tournée A' },
    { id: 2, name: 'Tournée B' },
    { id: 3, name: 'Tournée C' },
    { id: 4, name: 'Tournée D' },
  ];

  constructor(private router: Router) {}

  afficherDetailsTournee(deliveryRoundID: any) {
    this.router.navigate([DELIVERYROUNDSPAGEPATH, deliveryRoundID]);
  }
}