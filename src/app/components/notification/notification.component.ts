import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as nodemailer from 'nodemailer';

@Component({
    selector: 'app-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.scss']
})

export class NotificationComponent implements OnInit{
    public form: FormGroup;

    constructor(private readonly fb: FormBuilder){}

    public ngOnInit(): void {
        this.form = this.fb.group({
            name: [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(30)])],
            subject: [null, Validators.compose([Validators.required, Validators.maxLength(100)])],
            message: [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(1000)])]
        });
    }

    public submitForm(): void {
        if(this.form.invalid){
            this.form.markAllAsTouched();
        }
    }
}
