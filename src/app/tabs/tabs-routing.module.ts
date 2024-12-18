import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children:
      [
        {
          path: 'dashboard',
          children:
            [
              {
                path: '',
                loadChildren: '../dashboard/dashboard.module#DashboardPageModule'

              }
            ]
        },
        {
          path: 'tools',
          children:
            [
              {
                path: '',
                loadChildren: '../tools/tools.module#ToolsPageModule'
              }
            ]
        },
        {
          path: 'findus',
          children:
            [
              {
                path: '',
                loadChildren: '../findus/findus.module#FindusPageModule'
              }
            ]
        },
        {
          path: '',
          redirectTo: '/tabs/dashboard',
          pathMatch: 'full'
        }
      ]
  },
  {
    path: '',
    redirectTo: '/tabs/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports:
    [
      RouterModule.forChild(routes)
    ],
  exports:
    [
      RouterModule
    ]
})
export class TabsPageRoutingModule { }
