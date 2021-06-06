import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-properties-or-assets',
  templateUrl: './properties-or-assets.component.html',
  styleUrls: ['./properties-or-assets.component.css']
})
export class PropertiesOrAssetsComponent implements OnInit {

  propertyType: string;
  commercialValue: number;
  goodsList: any[] = [];
  columnsHeader: any[] = [];

  rowPerPage: number;
  totalRecords: number;

  //Campos de busqueda
  mortgaged:string;
  country:string;
  departament:string;
  tipo:string;

  //Tipo de vivienda
  departamentType:string;
  localType:string;
  homeType:string;

  ismortgaged:boolean;
  sameCityReference:boolean;
  notsameCityReference:boolean;

  constructor() { }

  ngOnInit(): void {
    this.rowPerPage = 5;
    this.totalRecords = 10;

    this.setColumns();
    this.createList();
    this.commercialValue=80000000 ;
  }

  setColumns() {
    this.columnsHeader = [
      { field: '', header: 'Acción', width: '15%' },
      { field: '', header: 'Tipo', width: '15%' },
      { field: '', header: 'Departamento', width: '20%' },
      { field: '', header: 'Ciudad', width: '14%' },
      { field: '', header: 'Valor Comercial', width: '15%' },
      { field: '', header: 'Hipoteca', width: '15%' }
    ];
  }
  createList() {
    let newGoods = new GoodsClass();
    newGoods.tipo = 'Casa';
    newGoods.departamento = 'Antioquia';
    newGoods.ciudad = 'Medellin';
    newGoods.valorComercial = '15.000000';
    newGoods.hipoteca = 'No';
    this.goodsList.push(newGoods);

    let newGoods1 = new GoodsClass();
    newGoods1.tipo = 'Casa';
    newGoods1.departamento = 'Antioquia';
    newGoods1.ciudad = 'Medellin';
    newGoods1.valorComercial = '17.000000';
    newGoods1.hipoteca = 'No';
    this.goodsList.push(newGoods1);
  }
  addProperties() {
    let newGoods = new GoodsClass();
    this.goodsList.push(newGoods);
  }
  save()
  {

  }
  remove(rowdata:GoodsClass, index:number)
  {
    this.goodsList.splice(index, 1);
    this.goodsList = JSON.parse(JSON.stringify(this.goodsList));
  }
}



export class GoodsClass {

  actions: string;
  tipo: string;
  departamento: string;
  ciudad: string;
  valorComercial: string;
  hipoteca: string;

}