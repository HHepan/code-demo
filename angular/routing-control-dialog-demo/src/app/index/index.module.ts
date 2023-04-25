import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IndexComponent} from './index.component';
import {IndexRoutingModule} from './index-routing.module';
import {Component1Component} from './component1/component1.component';
import {Component2Component} from './component2/component2.component';
import {DialogEntryModule} from '../../common/dialog-entry/dialog-entry.module';



@NgModule({
  declarations: [IndexComponent, Component1Component, Component2Component],
  imports: [
    CommonModule,
    IndexRoutingModule,
    DialogEntryModule,
  ]
})
export class IndexModule { }
