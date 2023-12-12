import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
    ADMINPAGEPATH,
    DELIVERYPAGEPATH,
    DELIVERYROUNDSPAGEPATH,
    LOGINPATH,
} from './shared/constants/path.constant';
import { DeliveryRoundsPageComponent } from './features/deliveryPage/views/delivery-rounds-page/delivery-rounds-page.component';
import { AdminPageComponent } from './features/adminPage/views/admin-page/admin-page.component';
import { LoginComponent } from './features/login/views/login/login.component';
import { DeliveryRoundDetailPageComponent } from './features/deliveryPage/views/delivery-round-detail-page/delivery-round-detail-page.component';
import { DeliveryPageComponent } from './features/deliveryPage/views/delivery-page/delivery-page.component';

const routes: Routes = [
    { path: '', redirectTo: DELIVERYPAGEPATH + "/" + DELIVERYROUNDSPAGEPATH, pathMatch: 'full' },
    {
        path: DELIVERYPAGEPATH,
        component: DeliveryPageComponent,

        children: [
            { path: DELIVERYROUNDSPAGEPATH, component: DeliveryRoundsPageComponent },
            { path: DELIVERYROUNDSPAGEPATH + "/:deliveryRoundID", component: DeliveryRoundDetailPageComponent },
        ]

    },
    { path: ADMINPAGEPATH, component: AdminPageComponent },
    { path: LOGINPATH, component: LoginComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutes {}
