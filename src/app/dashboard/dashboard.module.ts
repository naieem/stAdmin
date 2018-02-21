import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const DashboardRoute: Routes = [
  { path: '',  component: DashboardComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardRoute)
  ],
  declarations: [DashboardComponent],
  exports:[
    DashboardComponent
  ]
})
export class DashboardModule { }
