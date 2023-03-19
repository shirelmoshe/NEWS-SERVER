import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from '../app/modules/pages/components/home-page/home-page.component';
import { CategoriesPageComponent } from '../app/modules/pages/components/categories-page/categories-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'categories', component: CategoriesPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
