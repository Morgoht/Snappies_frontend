import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../views/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
    private hasSelectedRole = false;
    private  selectedRole :string;

    constructor(private dialog: MatDialog) {}

    selectUserRole(): void {
        if (!this.hasSelectedRole) {
            const dialogRef = this.dialog.open(LoginComponent, {
                disableClose: true,
                width: '400px',
               
            });

            dialogRef.afterClosed().subscribe((result) => {
                if (result) {
                    // Handle the selected user role (result)
                    console.log('Choisissez votre rôle:', result);
                }
                this.selectedRole = result;
                this.hasSelectedRole = true;
            });
        }
    }

    public getSelectedRole():string{
      return this.selectedRole;
    }
}
