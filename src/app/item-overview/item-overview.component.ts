import {Component, OnInit} from '@angular/core';
import {Item} from "../model/Item";
import {Observable} from "rxjs";
import {ItemService} from "../service/item.service";

@Component({
  selector: 'app-item-overview',
  templateUrl: './item-overview.component.html',
  styleUrls: ['./item-overview.component.css']
})
export class ItemOverviewComponent implements OnInit{
  public _items$!: Observable<any>;
  searchString: string = '';

  constructor (public itemService:ItemService){}

  ngOnInit() {
    this.getItems();
  }


  private getItems() {
   this._items$ = this.itemService.getItems();
  }

  convertToUrgency(amountOfStock: number): string {
    if(amountOfStock <= 5) return 'HIGH';
    if(amountOfStock <= 10) return 'MEDIUM';
    return 'LOW';
  }

  getFlagColor(amountOfStock: number) {
    if(amountOfStock <= 5) return 'red';
    if(amountOfStock <= 10) return 'orange';
    return 'green';
  }
}
