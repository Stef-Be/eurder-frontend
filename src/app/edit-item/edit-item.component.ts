import {Component, Input, OnInit, Output} from '@angular/core';
import {mergeMap, Observable} from "rxjs";
import {ItemService} from "../service/item.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit{
  _item$!: Observable<any>
  @Input() isReadOnly: Boolean = false;

  constructor(private itemService: ItemService,
              private route: ActivatedRoute,
              private location:Location) {
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
