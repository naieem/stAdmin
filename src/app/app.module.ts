import { BrowserModule , Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RootModule } from './root/root.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { RouteModules } from '../app/app-routing/app-routing.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RootModule,
    AppRoutingModule,
    RouteModules
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
