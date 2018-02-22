import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// ======================================
// Business module declaration block
// ======================================
import { DashboardModule } from '../../Business_Modules/dashboard/dashboard.module';
import { ErrorModule } from '../error/error.module';
// ======================================
// Business component declaration block
// ======================================
import { ErrorComponent } from '../error/error/error.component';


// ======================================
// Route configuration block
// ======================================
const appRoutes: Routes = [
  {
    path: '',
    loadChildren: '../../Business_Modules/dashboard/dashboard.module#DashboardModule',
  },
  {
    path: '**',
    component: ErrorComponent
  }
];


// ======================================
// nucleaus of the module
// ======================================
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

/**
 * Exporting all business modules to use in the grandparent module
 * @param [modules]
 */
export const RouteModules = [ErrorModule, DashboardModule];
