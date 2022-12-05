import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent {

  constructor(private location: Location){

  }

  goBack(): void {
    this.location.back();
  }
}
