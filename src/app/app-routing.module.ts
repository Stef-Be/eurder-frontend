import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ItemOverviewComponent} from "./item-overview/item-overview.component";

const routes: Routes = [
  {path: '', redirectTo: '/item-overview', pathMatch: 'full'},
  {path: 'item-overview', component: ItemOverviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
