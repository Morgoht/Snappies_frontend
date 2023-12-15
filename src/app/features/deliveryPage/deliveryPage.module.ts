import {NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../../shared/shared.module";
import {RouterOutlet} from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import {DeliveryRoundsPageComponent} from "./views/delivery-rounds-page/delivery-rounds-page.component";
import { CommonModule } from '@angular/common';
import { GraphQLModule } from 'src/app/graphql.module';
import { DeliveryRoundDetailPageComponent } from './views/delivery-round-detail-page/delivery-round-detail-page.component';
import { DeliveryPageComponent } from './views/delivery-page/delivery-page.component';
import { DeliveryDetailPageComponent } from './views/delivery-detail-page/delivery-detail-page.component';
import { AllArticlesPerDeliveryRoundPageComponent } from './views/all-articles-per-delivery-round-page/all-articles-per-delivery-round-page.component';
import { EditOrderLineDialogPageComponent } from './views/edit-order-line-dialog-page/edit-order-line-dialog-page.component';
import { CreateOrderLineDialogPageComponent } from './views/create-order-line-dialog-page/create-order-line-dialog-page.component';

@NgModule({
  declarations: [
    DeliveryPageComponent,
    DeliveryRoundsPageComponent,
    DeliveryRoundDetailPageComponent,
    DeliveryDetailPageComponent,
    AllArticlesPerDeliveryRoundPageComponent,
    EditOrderLineDialogPageComponent,
    CreateOrderLineDialogPageComponent,
  ],
  imports: [
    SharedModule,
      CommonModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      RouterOutlet,
      GraphQLModule,
      MatDialogModule,
      ReactiveFormsModule,
  ]
})
export class DeliveryPageModule {
}
