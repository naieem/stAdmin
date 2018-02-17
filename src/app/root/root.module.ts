import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './root/root.component';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import { SideNavigationModule } from '../side-navigation/side-navigation.module';
@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    SideNavigationModule
  ],
  declarations: [RootComponent],
  exports:[RootComponent]
})
export class RootModule { }
