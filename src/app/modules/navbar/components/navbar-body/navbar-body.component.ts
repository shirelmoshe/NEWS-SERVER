import { Component, Input } from '@angular/core';
import { IRoutes } from '../models/navbar-routes ';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'nwp-navbar-body',
  templateUrl: './navbar-body.component.html',
  styleUrls: ['./navbar-body.component.less'],
})
export class NavbarBodyComponent {
  @Input() RoutesPages: IRoutes[] = [];
  constructor(public auth: AuthService) {}
}
