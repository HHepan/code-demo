import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestIndexComponent } from './test-index/test-index.component';
import { TestDialogComponent } from './test-dialog/test-dialog.component';
import {TestRoutingModule} from './test-routing.module';
import {DialogEntryModule} from '../../common/dialog-entry/dialog-entry.module';



@NgModule({
  declarations: [TestIndexComponent, TestDialogComponent],
  imports: [
    CommonModule,
    TestRoutingModule,
    DialogEntryModule
  ]
})
export class TestModule { }
