import {NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../../shared/shared.module";
import {RouterOutlet} from '@angular/router';
import {DeliveryRoundsPageComponent} from "./views/delivery-rounds-page/delivery-rounds-page.component";
import { CommonModule } from '@angular/common';
import { GraphQLModule } from 'src/app/graphql.module';
import { DeliveryRoundDetailPageComponent } from './views/delivery-round-detail-page/delivery-round-detail-page.component';
import { DeliveryPageComponent } from './views/delivery-page/delivery-page.component';
import { DeliveryDetailPageComponent } from './views/delivery-detail-page/delivery-detail-page.component';
import { AllArticlesPerDeliveryRoundPageComponent } from './views/all-articles-per-delivery-round-page/all-articles-per-delivery-round-page.component';

@NgModule({
  declarations: [
    DeliveryPageComponent,
    DeliveryRoundsPageComponent,
    DeliveryRoundDetailPageComponent,
    DeliveryDetailPageComponent,
    AllArticlesPerDeliveryRoundPageComponent
  ],
  imports: [
    SharedModule,
      CommonModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      RouterOutlet,
      GraphQLModule,
  ]
})
export class DeliveryPageModule {
}
