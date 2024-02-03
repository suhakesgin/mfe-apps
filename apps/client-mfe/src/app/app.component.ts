import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { BrowserModule } from '@angular/platform-browser';
import { appRoutes } from './app.routes';

@Component({
  selector: 'mfe-apps-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'client-mfe';
}
