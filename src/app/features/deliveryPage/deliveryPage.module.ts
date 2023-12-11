import {NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../../shared/shared.module";
import {RouterOutlet} from '@angular/router';
import {DeliveryRoundsPageComponent} from "./views/delivery-rounds-page/delivery-rounds-page.component";
import { CommonModule } from '@angular/common';
import { GraphQLModule } from 'src/app/graphql.module';
import { DeliveryRoundDetailPageComponent } from './views/delivery-round-detail-page/delivery-round-detail-page.component';

@NgModule({
  declarations: [
    DeliveryRoundsPageComponent,
    DeliveryRoundDetailPageComponent
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
