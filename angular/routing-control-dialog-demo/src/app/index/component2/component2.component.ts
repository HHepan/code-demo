import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
  @Input() route?: ActivatedRoute;
  constructor() { }

  ngOnInit(): void {
    this.route?.params.subscribe(params => {
      console.log('@Input() route.params.subscribe', params);
    });
  }

}
