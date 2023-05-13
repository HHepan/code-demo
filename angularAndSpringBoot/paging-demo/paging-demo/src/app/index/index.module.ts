import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IndexComponent} from './index.component';
import {PageModule} from '../../common/page/page.module';
import {SizeModule} from '../../common/size/size.module';
import {IndexRoutingModule} from './index-routing.module';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [ IndexComponent ],
  imports: [
    CommonModule,
    PageModule,
    SizeModule,
    IndexRoutingModule,
    ReactiveFormsModule
  ]
})
export class IndexModule { }
