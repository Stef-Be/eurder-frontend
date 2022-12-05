import {Component} from '@angular/core';
import {Location} from '@angular/common';
import {FormBuilder, Validator, Validators} from "@angular/forms";
import {ItemService} from "../service/item.service";


@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})

export class CreateItemComponent {

  isSubmitted:boolean = false;

  checkoutForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      amount: ['', Validators.required]
    }
  );

  constructor(private location: Location,
              private formBuilder: FormBuilder,
              private itemService: ItemService) {
  }


  goBack(): void {
    this.location.back();
  }



  onSubmit() {
    this.isSubmitted=true;
    this.itemService.addItem(this.checkoutForm.value)
      .subscribe(data => console.log(data));
    this.checkoutForm.reset();
  }

}
