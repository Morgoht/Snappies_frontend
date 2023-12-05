import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {
  ADMINPAGEPATH,
  DELIVERYPAGEPATH,
  LOGINPATH,
} from "./shared/constants/path.constant";

import {LoginComponent} from "./features/login/views/login/login.component";
import {AdminPageComponent} from "./features/adminPage/views/admin-page/admin-page.component";
import {DeliveryPageComponent} from "./features/deliveryPage/views/delivery-page/delivery-page.component";

export const routes: Routes = [
  {
    path: LOGINPATH,
    component: LoginComponent,
    children: [
      /*
      { path: si subPath à login alors AJOUTE TON PATH ICI , component: AJOUTE TON COMPONENT ICI },
      */
    ]
  },
  {path: ADMINPAGEPATH, component: AdminPageComponent},
  {path: DELIVERYPAGEPATH , component: DeliveryPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutes {
}
