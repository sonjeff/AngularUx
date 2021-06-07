import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-circle',
  templateUrl: './progress-circle.component.html',
  styleUrls: ['./progress-circle.component.css']
})
export class ProgressCircleComponent implements OnInit {

  @Input() porcentaje:number;
  constructor() { }

  ngOnInit(): void {
  }

}
