import { Component, OnInit } from '@angular/core';
import { LoginService } from './features/login/service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
    constructor(private userRoleService: LoginService) {}

    ngOnInit(): void {

        this.userRoleService.selectUserRole();
    }
  title = 'front';
}
