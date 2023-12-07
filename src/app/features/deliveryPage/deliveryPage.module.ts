import {NgModule} from '@angular/core';
//import {DetailedOverviewComponent} from "./views/detailed-overview.component/detailed-overview.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../../shared/shared.module";
import {RouterOutlet} from '@angular/router';
import {DeliveryRoundsPageComponent} from "./views/delivery-rounds-page/delivery-rounds-page.component";
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    DeliveryRoundsPageComponent
  ],
  imports: [
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterOutlet,
    MatButtonModule,
    MatCardModule,
    MatListModule,
  ]
})
export class DeliveryPageModule {
}
