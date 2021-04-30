import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'smart-rounded-image',
  templateUrl: './rounded-image.component.html',
  styleUrls: ['./rounded-image.component.css']
})
export class RoundedImageComponent implements OnInit {

  @Input() title: string;
  @Input() urlImage: string;

  constructor() { }

  ngOnInit(): void {
  }

}
