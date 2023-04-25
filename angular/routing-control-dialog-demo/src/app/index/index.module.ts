import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IndexComponent} from './index.component';
import {IndexRoutingModule} from './index-routing.module';
import {Component1Component} from '../component1/component1.component';
import {Component2Component} from '../component2/component2.component';



@NgModule({
  declarations: [IndexComponent, Component1Component, Component2Component],
  imports: [
    CommonModule,
    IndexRoutingModule,
  ]
})
export class IndexModule { }
