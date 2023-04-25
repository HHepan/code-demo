import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DialogEntryComponent} from '../../common/dialog-entry/dialog-entry.component';
import {TestIndexComponent} from './test-index/test-index.component';
import {TestDialogComponent} from './test-dialog/test-dialog.component';

const routes: Routes = [
  {
    path: '',
    component: TestIndexComponent,
    children: [
      {
        path: 'testDialog',
        component: DialogEntryComponent,
        data: {
          component: TestDialogComponent
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
export class TestRoutingModule { }
