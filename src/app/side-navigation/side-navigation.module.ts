import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { ToolbarModule } from '../toolbar/toolbar.module';
@NgModule({
  imports: [
    CommonModule,
    ToolbarModule
  ],
  declarations: [SideNavigationComponent],
  exports:[SideNavigationComponent]
})
export class SideNavigationModule { }
