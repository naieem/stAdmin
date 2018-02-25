import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// ======================================
// Third party modules declaration
// ======================================
import { MessageToolbarModule } from '../message-toolbar/message-toolbar.module';
import { NotificationToolbarModule } from '../notification-toolbar/notification-toolbar.module';
import { ProfileToolbarModule } from '../profile-toolbar/profile-toolbar.module';
// ======================================
// Components declaration block
// ======================================
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    MessageToolbarModule,
    NotificationToolbarModule,
    ProfileToolbarModule
  ],
  declarations: [ToolbarComponent],
  exports: [ToolbarComponent]
})
export class ToolbarModule { }
