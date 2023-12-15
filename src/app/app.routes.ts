import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
    ADMINPAGEPATH,
    DELIVERYALLARTICLESPATH,
    DELIVERYDETAILPAGEPATH,
    DELIVERYPAGEPATH,
    DELIVERYROUNDSPAGEPATH,
    LOGINPATH,
    DELIVERYROUNDCREATIONPAGEPATH,
} from './shared/constants/path.constant';
import { DeliveryRoundsPageComponent } from './features/deliveryPage/views/delivery-rounds-page/delivery-rounds-page.component';
import { AdminPageComponent } from './features/adminPage/views/admin-page/admin-page.component';
import { LoginComponent } from './features/login/views/login/login.component';
import { DeliveryRoundDetailPageComponent } from './features/deliveryPage/views/delivery-round-detail-page/delivery-round-detail-page.component';
import { DeliveryPageComponent } from './features/deliveryPage/views/delivery-page/delivery-page.component';
import { DeliveryDetailPageComponent } from './features/deliveryPage/views/delivery-detail-page/delivery-detail-page.component';
import { DeliveryRoundCreationPageComponent } from './features/deliveryPage/views/delivery-round-creation/delivery-round-creation-page/delivery-round-creation-page.component';
import { AllArticlesPerDeliveryRoundPageComponent } from './features/deliveryPage/views/all-articles-per-delivery-round-page/all-articles-per-delivery-round-page.component';

const routes: Routes = [
    { path: '', redirectTo: DELIVERYPAGEPATH + "/" + DELIVERYROUNDSPAGEPATH, pathMatch: 'full' },
    {
        path: DELIVERYPAGEPATH,
        component: DeliveryPageComponent,

        children: [
            { path: DELIVERYROUNDSPAGEPATH, component: DeliveryRoundsPageComponent },
            { path: DELIVERYROUNDSPAGEPATH + "/:deliveryRoundID", component: DeliveryRoundDetailPageComponent},
            { path: DELIVERYDETAILPAGEPATH + "/:deliveryRoundID" + "/:deliveryID", component: DeliveryDetailPageComponent },
            { path: DELIVERYROUNDCREATIONPAGEPATH, component: DeliveryRoundCreationPageComponent },

            { path: DELIVERYALLARTICLESPATH + "/:deliveryRoundID", component: AllArticlesPerDeliveryRoundPageComponent },
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
