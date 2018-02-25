import { Component, OnInit, OnDestroy  } from '@angular/core';
import { NotificationServiceService } from '../../shared_service/notification-service.service';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  private message: string;
  constructor(private notificationService: NotificationServiceService) {}

  ngOnInit() {
          this.notificationService.notificationDetailsClicked.subscribe(
        message => {
          this.message = message;
        });
  }

}
