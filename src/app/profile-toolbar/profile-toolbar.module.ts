import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileToolbarComponent } from './profile-toolbar/profile-toolbar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProfileToolbarComponent],
  exports: [ProfileToolbarComponent]
})
export class ProfileToolbarModule { }
