import { Component, OnInit } from '@angular/core';



export interface Sector {
  value: string;
  sector: string;
}
@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
  value;
  sector;
  sectors: Sector[] = [
    { value: 'financial', sector: 'Financial' },
    { value: 'healthcare', sector: 'Healthcare' },
    { value: 'services', sector: 'Services' },
    { value: 'technology', sector: 'Technology' },
    { value: 'industrial goods', sector: 'Industrial Goods' }
  ];

  onChange(event) {
    this.value = event.target.value;
    console.log(this.value);
  }
}


