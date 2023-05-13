import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    console.log('data', data);
  }

  ngOnInit(): void {
  }

}
