import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LayoutComponent} from './layout.component';
import {HeaderModule} from '../header/header.module';
import {MenuModule} from '../menu/menu.module';
import {NavModule} from '../nav/nav.module';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    HeaderModule,
    MenuModule,
    NavModule,
    RouterModule,
  ]
})
export class LayoutModule { }
