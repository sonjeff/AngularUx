import { Component, OnInit } from '@angular/core';
import { PersonalInformation } from 'src/app/Models/personalInformation';
import { MenuItem, SelectItem } from 'primeng/api';

@Component({
  selector: 'app-customer-information',
  templateUrl: './customer-information.component.html',
  styleUrls: ['./customer-information.component.css']
})
export class CustomerInformationComponent implements OnInit {

  personalInformation: PersonalInformation = new PersonalInformation();
  numberCombo: SelectItem[] = [];
  countryCombo: SelectItem[] = [];
  genderCombo: SelectItem[] = [];
  marriedCombo: SelectItem[] = [];
  estratoCombo:SelectItem[] = [];
  educationLevelCombo:SelectItem[] = [];

  localeCalendar: any;
  processfileCombo: any;

  //cOMBO DE GENERO
  //COMBO DE ESTADO CIVIL
  //COMBO DE SOLICITUDES
  //COMBO DE EDUCACION
  //Combo de ciudades
  //poner los next a los lados

  constructor() {

  }
  ngOnInit() {
    const numberList = this.createNumberList();
    this.numberCombo = this.buidlNumberCombo(numberList);

    const countryList= this.createCountryList();
    this.countryCombo=this.buildStringCombo(countryList);

    
    const genderList= this.createGenderList();
    this.genderCombo=this.buildStringCombo(genderList);

    const statusMarriedList= this.createMarriedList();
    this.marriedCombo=this.buildStringCombo(statusMarriedList);

    const estratoList= this.createEstratoList();
    this.estratoCombo=this.buildStringCombo(estratoList);

    const educationLevelList= this.createEducationLevelList();
    this.educationLevelCombo=this.buildStringCombo(educationLevelList);

    this.setData();

  }
  setData()
  {
    this.personalInformation.firstName='Dagoberto';
    this.personalInformation.secondName='Andres';
    this.personalInformation.lastName='Carbona';
    this.personalInformation.maternalName='Robledo';
    this.personalInformation.birthDate=new Date();
    this.personalInformation.country='Colombia-Antioquia';
    this.personalInformation.expeditionDate=new Date();
    this.personalInformation.expeditionCity='Colombia-Barranquilla';
    this.personalInformation.gender='Masculino';
    this.personalInformation.education='Secundaria';
    this.personalInformation.email='gonzalo.proano@llacsaa.com';
    this.personalInformation.civilstatus='Soltero';
    this.personalInformation.stratum='Estrato 1';
    this.personalInformation.dependents=1;
    this.personalInformation.numberofchildren=0;
    this.personalInformation.numberpersonWork=3;
    this.personalInformation.numberpersonNotwork=1;

  }
  createNumberList(): number[] {
    let numberList: number[] = [];
    for (let i = 0; i < 20; i++) {
      numberList.push(i);
    }
    return numberList;
  }
  createCountryList(): string[] {
    let countryList: string[] = [];
    countryList.push("Colombia-Antioquia");
    countryList.push("Colombia-Barranquilla");
    countryList.push("Colombia-Boyacá");

    return countryList;
  }
  createGenderList(): string[] 
  {
    let countryList: string[] = [];
    countryList.push("Masculino");
    countryList.push("Femenino");

    return countryList;
  }
  createMarriedList(): string[] 
  {
    let countryList: string[] = [];
    countryList.push("Soltero");
    countryList.push("Casado");

    return countryList;
  }
  createEducationLevelList(): string[] 
  {
    let countryList: string[] = [];
    countryList.push("Primaria");
    countryList.push("Secundaria");
    countryList.push("Tercer Nivel");
    countryList.push("Cuarto Nivel");

    return countryList;
  }
  createEstratoList(): string[] 
  {
    let countryList: string[] = [];
    countryList.push("Estrato 1");
    countryList.push("Estrato 2");
    countryList.push("Estrato 3");
    countryList.push("Estrato 4");

    return countryList;
  }
  buildStringCombo(list:string[])
  {
    let combo: SelectItem[] = [];
    combo = [{ label: 'Seleccione', value: null }];
    list.forEach(item => {
      combo.push({
        label: item + "",
        value: item
      });
    });
    return combo;
  }
  buidlNumberCombo(numberList: number[]): SelectItem[] {
    let combo: SelectItem[] = [];
    combo = [{ label: 'N/A', value: null }];
    numberList.forEach(item => {
      combo.push({
        label: item + "",
        value: item
      });
    });
    return combo;
  }

}
