import { Component } from '@angular/core';
import {
    DETAILED_OVERVIEWPATH,
    GENERAL_OVERVIEWPATH,
    OVERVIEWPATH,
    REJECTION_BACKLOGPATH
} from "../../../shared/constants/path.constant";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
    generalPath = OVERVIEWPATH + '/' + GENERAL_OVERVIEWPATH;
    detailedPath = OVERVIEWPATH + '/' + DETAILED_OVERVIEWPATH;
    rejectionbacklogpath = REJECTION_BACKLOGPATH;
}
