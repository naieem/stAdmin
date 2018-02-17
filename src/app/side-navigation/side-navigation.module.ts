import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SideNavigationComponent],
  exports:[SideNavigationComponent]
})
export class SideNavigationModule { }
