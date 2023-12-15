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
import { DeliveryRoundCreationPageComponent } from './views/delivery-round-creation/delivery-round-creation-page/delivery-round-creation-page.component';
import { EditDeliveryRoundPageComponent } from './views/edit-delivery-page-dialog/edit-delivery-round-page/edit-delivery-round-page.component';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { AllArticlesPerDeliveryRoundPageComponent } from './views/all-articles-per-delivery-round-page/all-articles-per-delivery-round-page.component';
import { OrderLineDialogPageComponent } from './views/order-line-dialog-page/order-line-dialog-page.component';
import { LoginModule } from '../login/login.module';

@NgModule({
  declarations: [
    DeliveryPageComponent,
    DeliveryRoundsPageComponent,
    DeliveryRoundDetailPageComponent,
    DeliveryDetailPageComponent,
    AllArticlesPerDeliveryRoundPageComponent,
    OrderLineDialogPageComponent,
    DeliveryDetailPageComponent,
    DeliveryRoundCreationPageComponent,
    EditDeliveryRoundPageComponent,
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
      MatSelectModule,
      MatOptionModule,
      LoginModule
  ]
})
export class DeliveryPageModule {
}
