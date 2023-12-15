// create-order-line-dialog-page.component.ts

import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Article } from '../../models/article';
import DeliveryPageService from '../../services/delivery-page.service';

@Component({
  selector: 'app-create-order-line-dialog-page',
  templateUrl: './create-order-line-dialog-page.component.html',
  styleUrls: ['./create-order-line-dialog-page.component.scss']
})
export class CreateOrderLineDialogPageComponent implements OnInit {
  articles: Article[] = [];
  selectedArticleId: string;
  quantity: number;

  constructor(public dialogRef: MatDialogRef<CreateOrderLineDialogPageComponent>, private deliveryPageService: DeliveryPageService) { }

  ngOnInit(): void {
    // Subscribe to the observable to get the data
    this.deliveryPageService.getAllArticles().subscribe(
      (data: Article[]) => {
        console.log('Articles:', data);
        this.articles = data;
      },      
      (error: any) => {
        console.error('Error fetching articles:', error);
      }
    );

    this.quantity = 0;
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onCreateOrderLineClick(): void {
    const selectedArticle = this.articles.find(article => article.documentId === this.selectedArticleId);

    if (selectedArticle) {
      const orderLine = {
        articleId: selectedArticle.documentId,
        articleName: selectedArticle.name,
        quantity: this.quantity
      };

      this.dialogRef.close(orderLine);
    } else {
      console.error('Selected article not found.');
    }
  }
}
