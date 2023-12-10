import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DeliveryRound } from '../../models/delivery-round';
import DeliveryPageService from '../../service/delivery-page.service'

@Component({
  selector: 'app-delivery-round-detail-page',
  templateUrl: './delivery-round-detail-page.component.html',
  styleUrl: './delivery-round-detail-page.component.scss'
})
export class DeliveryRoundDetailPageComponent {
  deliveryRound$ = this.deliveryService.deliveryRoundsList$; 
  constructor(private route: ActivatedRoute, private router: Router, private deliveryService : DeliveryPageService) {}

  ngOnInit() {

  }
  afficherDetailsLivraison(livraisonId: number) {
    // Naviguer vers la page de détails de la livraison
    //this.router.navigate(['/delivery-details', livraisonId]);
  }
}

