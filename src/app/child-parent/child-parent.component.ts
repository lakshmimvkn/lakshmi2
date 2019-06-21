import { Component,Output,EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-parent',
  templateUrl: './child-parent.component.html',
  styleUrls: ['./child-parent.component.scss']
}),
@Output() childData =new EventEmitter();



export class ChildParentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
