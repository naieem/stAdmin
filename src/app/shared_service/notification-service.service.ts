import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class NotificationServiceService {
  private notificationClicked = new Subject<string>();
  notificationDetailsClicked = this.notificationClicked.asObservable();
  showNotificationDetails(notificationId: string) {
    this.notificationClicked.next(notificationId);
  }
  constructor() { }

}
