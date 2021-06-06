import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'working-information',
  templateUrl: './working-information.component.html',
  styleUrls: ['./working-information.component.css']
})
export class WorkingInformationComponent implements OnInit {

  options=['COMERCIANTE','EMPRESARIO','DESEMPLEADO'];

  constructor() { }

  ngOnInit(): void {
  }

}
