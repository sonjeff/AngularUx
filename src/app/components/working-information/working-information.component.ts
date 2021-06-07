import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'working-information',
  templateUrl: './working-information.component.html',
  styleUrls: ['./working-information.component.css']
})
export class WorkingInformationComponent implements OnInit {

  selectedValue=['val1','val2'];
  selectedValue1=['val1','val2'];

  options=['COMERCIANTE','EMPRESARIO','DESEMPLEADO'];

  constructor() { }

  ngOnInit(): void {
  }

}
