import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environment/environment";
import {Observable, of} from "rxjs";
import {Item} from "../model/Item";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private _url:string;

  constructor(private http:HttpClient) {
    this._url = `${environment.backendUrl}/items`
  }

  getItems(): Observable<any>{
    return this.http.get<Item[]>(this._url)
  }

  searchItems(term: string) {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Item[]>(this._url);
  }
}
