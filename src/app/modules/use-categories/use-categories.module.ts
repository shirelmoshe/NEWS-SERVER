import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesBodyComponent } from './components/categories-body/categories-body.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatChipsModule } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CategoriesBodyComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatChipsModule,
    FormsModule,
  ],
  exports: [CategoriesBodyComponent],
})
export class UseCategoriesModule {}
