import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
// ======================================
// third party module block
// ======================================
import { NotificationModule } from '../../app/notification/notification.module';
// ======================================
// component block
// ======================================
import { DashboardComponent } from './dashboard/dashboard.component';

const DashboardRoute: Routes = [
  { path: '',  component: DashboardComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardRoute),
    NotificationModule
  ],
  declarations: [DashboardComponent],
  exports: [DashboardComponent]
})
export class DashboardModule { }
