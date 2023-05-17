import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutComponent} from './part/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
        data: {
          title: '首页'
        }
      },
      {
        path: 'component1Path',
        loadChildren: () => import('./component1/component1.module').then(m => m.Component1Module),
        data: {
          title: '组件1'
        }
      },
      {
        path: 'component2Path',
        loadChildren: () => import('./component2/component2.module').then(m => m.Component2Module),
        data: {
          title: '组件2'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
