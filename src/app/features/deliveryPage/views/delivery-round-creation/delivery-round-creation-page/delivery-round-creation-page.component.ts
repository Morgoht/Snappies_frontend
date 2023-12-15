import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DELIVERYPAGEPATH, DELIVERYROUNDSPAGEPATH } from 'src/app/shared/constants/path.constant';
import DeliveryPageService from '../../../services/delivery-page.service';
import { DeliveryPageComponent } from '../../delivery-page/delivery-page.component';

@Component({
    selector: 'app-delivery-round-creation-page',
    templateUrl: './delivery-round-creation-page.component.html',
    styleUrls: ['./delivery-round-creation-page.component.scss'],
})
export class DeliveryRoundCreationPageComponent implements OnInit {
    deliveryForm: FormGroup;

    constructor(private fb: FormBuilder,private deliveryRoundService: DeliveryPageService,private router : Router,
                private deliverypage: DeliveryPageComponent) {}

    ngOnInit() {
        this.initializeForm();
    }

    private initializeForm() {
        this.deliveryForm = this.fb.group({
            recipientName: ['', Validators.required],
            // Add more form controls as needed
        });
    }

    onSubmit() {
        if (this.deliveryForm.valid) {
            // Retrieve the value of the "name" field using optional chaining
            const nameValue = this.deliveryForm.get('recipientName')?.value;
            this.deliveryRoundService.createDeliveryRound(nameValue);

            this.router.navigate(['/']);
            // Process the form data (save to server, etc.)
            console.log('Form submitted - Name:', nameValue);
        }
    }

    goBack() {
        window.history.back();
    }

}
