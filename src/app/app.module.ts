import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutes} from './app.routes';
import {AppComponent} from './app.component';
import {AdminPageModule} from "./features/adminPage/adminPage.module";
import {DeliveryPageModule} from "./features/deliveryPage/deliveryPage.module";
import {LoginModule} from "./features/login/login.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { GraphQLModule } from './graphql.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        CommonModule,
        AppRoutes,
        AdminPageModule,
        DeliveryPageModule,
        LoginModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        HttpClientModule,
        GraphQLModule,
        FormsModule,
        MatDialogModule,
        MatButtonModule,
        MatSelectModule,
        MatOptionModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
