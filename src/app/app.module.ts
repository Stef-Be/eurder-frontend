import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { NameFilterPipe } from './pipe/name-filter.pipe';
import {ItemOverviewComponent} from "./item-overview/item-overview.component";
import { CreateItemComponent } from './create-item/create-item.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemOverviewComponent,
    NameFilterPipe,
    CreateItemComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
