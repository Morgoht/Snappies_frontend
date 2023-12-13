import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;

  constructor(private fb: FormBuilder,private router: Router) {}

  ngOnInit(): void {
      this.loginForm = new FormGroup({
          username: new FormControl('', [
              Validators.required, // Username is required
              Validators.minLength(3), // Minimum length of 3 characters
              Validators.maxLength(20) // Maximum length of 20 characters
          ]),
          password: new FormControl('', [
              Validators.required, // Password is required
              Validators.minLength(6) // Minimum length of 6 characters
          ])
      });
  }

    get f() { return this.loginForm.controls; }

    onSubmit(): void {
        if (this.loginForm.invalid) {
            return;
        }

        // Handle your form submission here
        console.log(this.loginForm.value);
    }
    goBack() {
        this.router.navigate(['/']); // Navigate back to the previous page
    }
}
