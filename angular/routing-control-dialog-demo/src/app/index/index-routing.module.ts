import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IndexComponent} from './index.component';
import {RouterModule, Routes} from '@angular/router';
import {DialogEntryComponent} from '../../common/dialog-entry/dialog-entry.component';
import {Component1Component} from './component1/component1.component';
import {Component2Component} from './component2/component2.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      {
        path: 'component1Path',
        component: DialogEntryComponent,
        data: {
          component: Component1Component
        },
        resolve: {}
      },
      {
        path: 'component2Path/:id',
        component: DialogEntryComponent,
        data: {
          component: Component2Component
        }
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class IndexRoutingModule { }
