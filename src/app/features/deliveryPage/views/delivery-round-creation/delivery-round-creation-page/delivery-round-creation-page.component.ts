import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-delivery-round-creation-page',
    templateUrl: './delivery-round-creation-page.component.html',
    styleUrls: ['./delivery-round-creation-page.component.scss'],
})
export class DeliveryRoundCreationPageComponent implements OnInit {
    deliveryForm: FormGroup;

    constructor(private fb: FormBuilder) {}

    ngOnInit() {
        this.initializeForm();
    }

    private initializeForm() {
        this.deliveryForm = this.fb.group({
            recipientName: ['', Validators.required],
            address: ['', Validators.required],
            deliveryDate: [null, Validators.required],
            // Add more form controls as needed
        });
    }

    onSubmit() {
        if (this.deliveryForm.valid) {
            // Process the form data (save to server, etc.)
            console.log('Form submitted:', this.deliveryForm.value);
        }
    }
    goBack() {
        window.history.back();
    }

}
