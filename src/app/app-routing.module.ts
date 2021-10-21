import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginatorComponent } from './components/paginator/paginator.component';
const routes: Routes = [
  {path: '',component: PaginatorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
