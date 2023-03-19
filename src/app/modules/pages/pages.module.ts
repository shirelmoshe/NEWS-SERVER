import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CategoriesPageComponent } from './components/categories-page/categories-page.component';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatChipsModule } from '@angular/material/chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UseCategoriesModule } from '../use-categories/use-categories.module';
import { FormsModule } from '@angular/forms';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AuthZeroModule } from '../auth-zero/auth-zero.module';

@NgModule({
  declarations: [
    HomePageComponent,
    CategoriesPageComponent,
    LoginPageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatChipsModule,
    UseCategoriesModule,
    FormsModule,
    NgbCarouselModule,
    AuthZeroModule,
  ],

  bootstrap: [HomePageComponent],

  exports: [HomePageComponent, CategoriesPageComponent, LoginPageComponent],
})
export class PagesModule {}
