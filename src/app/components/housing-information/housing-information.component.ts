import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-housing-information',
  templateUrl: './housing-information.component.html',
  styleUrls: ['./housing-information.component.css']
})
export class HousingInformationComponent implements OnInit {

  display:boolean;
  options=[];
  dat:String;
  selectedValues: string[] = ['val1','val2'];

  constructor() {
    this.options=['MEFIA','PACÍFICO','PICHINCHA'];
   }

  ngOnInit(): void {
  }

  showDialog() {
    this.display = true;
    
}
}
