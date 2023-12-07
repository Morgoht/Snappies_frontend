import { Component } from '@angular/core';

@Component({
  selector: 'app-delivery-rounds-page',
  templateUrl: './delivery-rounds-page.component.html',
  styleUrl: './delivery-rounds-page.component.scss'
})
export class DeliveryRoundsPageComponent {
  deliveryRounds = ['Tournée n°1 : Mardi 05/12', 'Tournée n°2 : Mercredi 06/12', 'Tournée n°3 : Vendredi 08/12'];

  afficherDetailsTournee(tournee: string) {
    // Rediriger vers le composant des détails de la tournée avec la tournée sélectionnée
    // Remplacez 'details' par le nom du composant que vous allez créer pour les détails de la tournée
    // et utilisez la tournée comme paramètre pour identifier la tournée sélectionnée.

    // Exemple:
    // this.router.navigate([DELIVERYROUNDSPAGEPATH, 'details', tournee]);
  }
}