import { style } from '@angular/animations';
import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'smart-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit {

  @Input() public size: number = 20;
  @Input() public border: number;
  @Input() public icon: string;
  @Input() public isIconfy = false;
  @Input() public message: string
  @Input() public borderColor: string;
  @Input() public color: string;

  constructor() { }

  ngOnInit(): void {
  }

  public getIconStyle(): string {
    const styles: string[] = []
    styles.push(`font-size: ${ this.size }px`);
    if (this.border || this.borderColor) {
      styles.push(`border: ${this.border || 1}px solid ${ this.borderColor }`);
    }
    if(this.color) {
      styles.push(`color: ${ this.color }`);
    }
    return styles.join(' ');
  }

}
