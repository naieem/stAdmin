import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SideNavigationModule } from '../side-navigation/side-navigation.module'
@NgModule({
  imports: [
    CommonModule,
    SideNavigationModule
  ],
  declarations: [HeaderComponent],
  exports:[HeaderComponent]
})
export class HeaderModule { }
