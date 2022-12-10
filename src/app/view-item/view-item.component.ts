import {Component, OnInit} from '@angular/core';
import {Location} from "@angular/common";
import {mergeMap, Observable} from "rxjs";
import {ItemService} from "../service/item.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.css']
})
export class ViewItemComponent implements OnInit{

  _item$!: Observable<any>

  constructor(private itemService: ItemService, private route: ActivatedRoute, private location:Location) {
  }

  ngOnInit(): void {
    this.getItem();
  }


  goBack() {
    this.location.back();
  }

  private getItem() {
    this._item$ = this.route.paramMap.pipe(
      mergeMap(params => this.itemService.getItem(params.get('id')))
    )
  }
}
