import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RootModule } from './root/root.module';
import { AppComponent } from './app.component';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RootModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
