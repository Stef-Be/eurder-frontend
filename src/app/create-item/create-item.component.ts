import {Component} from '@angular/core';
import {Location} from '@angular/common';
import {FormBuilder, Validators} from "@angular/forms";
import {ItemService} from "../service/item.service";


@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})

export class CreateItemComponent {

  checkoutForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', [Validators.required, Validators.maxLength(255)]],
      price: ['', [Validators.required, Validators.min(0)]],
      amount: ['', [Validators.required, Validators.min(0)]]
    }
  );

  _charactersLeft: number = 255;


  constructor(private location: Location,
              private formBuilder: FormBuilder,
              private itemService: ItemService) {
  }


  goBack(): void {
    this.location.back();
  }

  onSubmit() {
    this.checkoutForm.markAllAsTouched();
    if(this.checkoutForm.status === "VALID") {
      this.itemService.addItem(this.checkoutForm.value).subscribe(data => console.log(data));
      this.checkoutForm.reset();
    }
  }

  valueChange() {
    // @ts-ignore
    this._charactersLeft = 255-this.checkoutForm.value.description?.length;
  }
}
