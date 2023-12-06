import { Component } from '@angular/core';
import {
    LOGINPATH,DELIVERYPAGEPATH,ADMINPAGEPATH
} from "../../../shared/constants/path.constant";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
    adminPagePath = ADMINPAGEPATH
    deliveryPagePath = DELIVERYPAGEPATH

    loginPath =  LOGINPATH

}
