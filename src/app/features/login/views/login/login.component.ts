import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { LoadingService } from 'src/app/shared/service/loading.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    isLoading = false;

    constructor(private dialogRef: MatDialogRef<LoginComponent>,private loadingService: LoadingService ) {}

    ngOnInit(): void {
        // Subscribe to the loading$ observable to update the loading state
        this.loadingService.loading$.subscribe((isLoading) => {
            this.isLoading = isLoading;
        });
    }
    selectRole(role: string): void {
        this.loadingService.setLoading(true);

        // Simulate asynchronous operation (e.g., HTTP request)
        setTimeout(() => {
            this.dialogRef.close(role);
            this.loadingService.setLoading(false);
            this.loadingService.setUserChoice(role);
        }, 3000); // Simulating a 2-second delay, adjust as needed

    }
}
