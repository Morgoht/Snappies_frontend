import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutes} from './app.routes';
import {AppComponent} from './app.component';
import {AdminPageModule} from "./features/adminPage/adminPage.module";
import {DeliveryPageModule} from "./features/deliveryPage/deliveryPage.module";
import {LoginModule} from "./features/login/login.module";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
      BrowserModule,
      AppRoutes,
      AdminPageModule,
      DeliveryPageModule,
      LoginModule,
      ReactiveFormsModule,

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
