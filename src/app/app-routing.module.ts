import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ItemOverviewComponent} from "./item-overview/item-overview.component";
import {CreateItemComponent} from "./create-item/create-item.component";
import {ViewItemComponent} from "./view-item/view-item.component";

const routes: Routes = [
  {path: '', redirectTo: '/item-overview', pathMatch: 'full'},
  {path: 'item-overview', component: ItemOverviewComponent},
  {path: 'create-item', component: CreateItemComponent},
  {path: 'view-item/:id', component: ViewItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
