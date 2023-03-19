import { Component } from '@angular/core';
import { IRoutes } from './modules/navbar/components/models/navbar-routes ';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'nwp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'newsWebProject-client';
  constructor(public auth: AuthService) {
    debugger;
    this.tempRoutes.push(
      {
        path: '',
        pathName: 'home',
      },
      { path: 'categories', pathName: 'categories' }
    );
    this.auth.isAuthenticated$.subscribe(
      (isAuthenticated) => (this.isAuthenticated = isAuthenticated)
    );
  }
  public isAuthenticated = false;
  public tempRoutes: IRoutes[] = [];
}
