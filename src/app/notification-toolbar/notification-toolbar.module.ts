import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationToolbarComponent } from './notification-toolbar/notification-toolbar.component';
import { NotificationServiceService } from '../shared_service/notification-service.service';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NotificationToolbarComponent],
  exports: [NotificationToolbarComponent],
  providers: [NotificationServiceService]
})
export class NotificationToolbarModule { }
