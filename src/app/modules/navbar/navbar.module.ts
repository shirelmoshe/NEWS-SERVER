import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarBodyComponent } from './components/navbar-body/navbar-body.component';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AuthZeroModule } from '../auth-zero/auth-zero.module';

@NgModule({
  declarations: [NavbarBodyComponent],
  imports: [CommonModule, RouterModule, MatToolbarModule, AuthZeroModule],
  exports: [NavbarBodyComponent],
})
export class NavbarModule {}
