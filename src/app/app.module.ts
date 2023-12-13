import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutes} from './app.routes';
import {AppComponent} from './app.component';
import {AdminPageModule} from "./features/adminPage/adminPage.module";
import {DeliveryPageModule} from "./features/deliveryPage/deliveryPage.module";
import {LoginModule} from "./features/login/login.module";
import {ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { GraphQLModule } from './graphql.module';
import {FirebaseUIModule, firebase, firebaseui} from 'firebaseui-angular';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import { environment } from 'src/environnments/environments';

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
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireAuthModule,
        FirebaseUIModule.forRoot(firebaseUiAuthConfig),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
