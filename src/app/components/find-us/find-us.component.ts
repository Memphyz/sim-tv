import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'smart-find-us',
    templateUrl: './find-us.component.html',
    styleUrls: ['./find-us.component.scss']
})

export class FindUsComponent implements OnInit {
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
    
    @HostListener('window:resize', ['$event'])
    public currentWidth(): number {
        return window.innerWidth;
    }
}
