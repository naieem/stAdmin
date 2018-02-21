import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardModule } from '../dashboard/dashboard.module';
import { ErrorModule } from '../error/error.module';
import { ErrorComponent } from '../error/error/error.component';
const appRoutes: Routes = [
  {
    path:'',
    loadChildren: 'app/dashboard/dashboard.module#DashboardModule',
  },
  { 
    path: '**',
    component:ErrorComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      {
         enableTracing: true, // <-- debugging purposes only
      }
    )
  ],
  declarations: [],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }

export const RouteModules=[ErrorModule,DashboardModule];