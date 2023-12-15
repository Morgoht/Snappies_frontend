import {NgModule} from '@angular/core';
import {LoginComponent} from "./views/login/login.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../../shared/shared.module";
import { RouterOutlet } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [
        LoginComponent,
    ],
    exports: [
        LoginComponent
    ],
    imports: [
        SharedModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        RouterOutlet,
        FormsModule,
        MatDialogModule,
        MatButtonModule,

    ]
})
export class LoginModule {
}
