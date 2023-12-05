import {NgModule} from '@angular/core';
//import {DetailedOverviewComponent} from "./views/detailed-overview.component/detailed-overview.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../../shared/shared.module";
import {RouterOutlet} from '@angular/router';
import {AdminPageComponent} from "./views/admin-page/admin-page.component";

@NgModule({
    declarations: [
      AdminPageComponent,
    ],
    imports: [
        SharedModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        RouterOutlet,
    ]
})
export class AdminPageModule {
}
