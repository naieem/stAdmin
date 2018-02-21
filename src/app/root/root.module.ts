import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './root/root.component';
import { HeaderModule } from '../header/header.module';
import { MainContentModule } from '../main-content/main-content.module';
import { FooterModule } from '../footer/footer.module';
@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    MainContentModule,
    FooterModule
  ],
  declarations: [RootComponent],
  exports:[RootComponent]
})
export class RootModule { }
