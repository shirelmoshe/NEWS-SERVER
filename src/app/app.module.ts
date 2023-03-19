import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarModule } from './modules/navbar/navbar.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatChipsModule } from '@angular/material/chips';
import { PagesModule } from './modules/pages/pages.module';
import { UseCategoriesModule } from './modules/use-categories/use-categories.module';

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';
import { AuthZeroModule } from './modules/auth-zero/auth-zero.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule,
    NavbarModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatChipsModule,
    PagesModule,
    UseCategoriesModule,

    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'dev-mluuahxjbvf524ap.us.auth0.com',
      clientId: 'gT7o9IDwiUXKSI1Xhz9vulQj7IYgnwx2',
      authorizationParams: {
        redirect_uri: window.location.origin,
      },
    }),
    AuthZeroModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent],

  exports: [],
})
export class AppModule {
  constructor() {}
}
