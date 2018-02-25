import { Component, OnInit } from '@angular/core';
import { NotificationServiceService } from '../../shared_service/notification-service.service';
@Component({
  selector: 'app-notification-toolbar',
  templateUrl: './notification-toolbar.component.html',
  styleUrls: ['./notification-toolbar.component.css']
})
export class NotificationToolbarComponent implements OnInit {

  constructor(private notificationService: NotificationServiceService) {
    notificationService.notificationDetailsClicked.subscribe(
      astronaut => {
        console.log(astronaut);
      });
   }

  ngOnInit() {
  }

  showNotificationDetails() {
    this.notificationService.showNotificationDetails('hello world');
  }

}
