import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delivery-round-detail-page',
  templateUrl: './delivery-round-detail-page.component.html',
  styleUrl: './delivery-round-detail-page.component.scss'
})
export class DeliveryRoundDetailPageComponent {
  deliveryRound: any; // Assurez-vous de définir correctement le type de vos données

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      // Utilisez params.id pour récupérer l'ID de l'URL
      const id = params['id'];

      // Chargez les détails de la tournée en fonction de l'ID
      // Assurez-vous d'implémenter le service ou la logique nécessaire pour charger les données
      // Assignez les données à this.deliveryRound

      //deliveryRound = this.deliveryRoundService.getDeliveryRound(id);
      this.deliveryRound = {
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
      }; // Exemple de données
    });
  }
  afficherDetailsLivraison(livraisonId: number) {
    // Naviguer vers la page de détails de la livraison
    //this.router.navigate(['/delivery-details', livraisonId]);
  }
}

