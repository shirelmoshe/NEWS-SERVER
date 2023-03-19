import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';

@NgModule({
  declarations: [LoginButtonComponent, LogoutButtonComponent],
  imports: [CommonModule],
  exports: [LoginButtonComponent, LogoutButtonComponent],
})
export class AuthZeroModule {}
