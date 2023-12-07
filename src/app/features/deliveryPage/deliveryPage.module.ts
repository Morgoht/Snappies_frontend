import {NgModule} from '@angular/core';
//import {DetailedOverviewComponent} from "./views/detailed-overview.component/detailed-overview.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../../shared/shared.module";
import {RouterOutlet} from '@angular/router';
import {DeliveryRoundsPageComponent} from "./views/delivery-rounds-page/delivery-rounds-page.component";

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
  ]
})
export class DeliveryPageModule {
}
