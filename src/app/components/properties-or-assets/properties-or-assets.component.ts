import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-properties-or-assets',
  templateUrl: './properties-or-assets.component.html',
  styleUrls: ['./properties-or-assets.component.css']
})
export class PropertiesOrAssetsComponent implements OnInit {

  propertyType:string;
  commercialValue:string;
  goodsList:any[]=[];
  columnsHeader:any[]=[];

  rowPerPage:number;
  totalRecords:number;

  constructor() { }

  ngOnInit(): void {
    this.rowPerPage=5;
    this.totalRecords=10;

    this.setColumns();
  }

  setColumns()
  {
    this.columnsHeader = [
      { field: '', header: 'Action', width: '5%' },
      { field: '', header: 'Tipo', width: '8%' },
      { field: '', header: 'Departamento', width: '23%' },
      { field: '', header: 'Ciudad', width: '10%' },
      { field: '', header: 'Valor Comercial', width: '23%' },
      { field: '', header: 'Hipoteca', width: '12%' }
    ];
  }
}


export class GoodsClass{

  actions:string;
  tipo:string;
  departamento:string;
  ciudad:string;
  valorComercial:string;
  hipoteca:string;

}