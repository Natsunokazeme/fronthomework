import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { PaginatorComponent } from './components/paginator/paginator.component';
import { ItemsPageComponent } from './components/items-page/items-page.component';

const routes: Routes = [
  {path: '',component: ItemsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
