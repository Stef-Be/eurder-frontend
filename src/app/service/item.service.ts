import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environment/environment";
import {Observable, of} from "rxjs";
import {Item} from "../model/Item";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private readonly _url:string;

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

  addItem(item:Item|any){
    return this.http.post(`${this._url}`, item);
  }

  getItem(id: string | null) {
    return this.http.get<Item>(`${this._url}/${id}`)
  }
}
