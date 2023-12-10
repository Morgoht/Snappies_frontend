import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
    ADMINPAGEPATH,
    DELIVERYROUNDSPAGEPATH,
    LOGINPATH,
} from './shared/constants/path.constant';
import { DeliveryRoundsPageComponent } from './features/deliveryPage/views/delivery-rounds-page/delivery-rounds-page.component';
import { AdminPageComponent } from './features/adminPage/views/admin-page/admin-page.component';
import { LoginComponent } from './features/login/views/login/login.component';
import { DeliveryRoundDetailPageComponent } from './features/deliveryPage/views/delivery-round-detail-page/delivery-round-detail-page.component';

const routes: Routes = [
    { path: '', redirectTo: DELIVERYROUNDSPAGEPATH, pathMatch: 'full' },
    {
        path: DELIVERYROUNDSPAGEPATH,
        component: DeliveryRoundsPageComponent,

        children: [
            //{ path: DELIVERYROUNDSPAGEPATH + "/:id", component: DeliveryRoundsPageComponent },
        ]

    },
    { path: DELIVERYROUNDSPAGEPATH + "/:id", component: DeliveryRoundDetailPageComponent },
    { path: ADMINPAGEPATH, component: AdminPageComponent },
    { path: LOGINPATH, component: LoginComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutes {}
