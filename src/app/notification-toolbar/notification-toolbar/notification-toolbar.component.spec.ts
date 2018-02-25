import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationToolbarComponent } from './notification-toolbar.component';

describe('NotificationToolbarComponent', () => {
  let component: NotificationToolbarComponent;
  let fixture: ComponentFixture<NotificationToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
