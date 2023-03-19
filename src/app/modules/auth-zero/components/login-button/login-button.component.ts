import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'nwp-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.less'],
})
export class LoginButtonComponent {
  // Inject the authentication service into your component through the constructor
  constructor(public auth: AuthService) {}
}
