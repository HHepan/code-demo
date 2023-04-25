import {NgModule} from '@angular/core';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {DialogEntryComponent} from './dialog-entry.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    DialogEntryComponent
  ],
  imports: [
    MatDialogModule,
    CommonModule
  ],
  providers: [
    {provide: MatDialogRef, useValue: {}},
  ],
  exports: [
    DialogEntryComponent
  ]
})
export class DialogEntryModule {
}
