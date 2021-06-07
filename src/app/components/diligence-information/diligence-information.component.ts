import { Component, OnInit } from '@angular/core';
import { MenuItem, SelectItem } from 'primeng/api';
import { PersonalInformation } from 'src/app/Models/personalInformation';

@Component({
  selector: 'app-diligence-information',
  templateUrl: './diligence-information.component.html',
  styleUrls: ['./diligence-information.component.css']
})
export class DiligenceInformationComponent implements OnInit {

 
  steps: any[] = [];
  activeIndex: number = 0;
  personalInformation: PersonalInformation = new PersonalInformation();
  items: MenuItem[];


  requestCombo: SelectItem[] = [];
  requestSelected:string;

  //Mostrar
  showpersonalInformation:boolean;
  showworkingInformation:boolean;
  showhousingInformation:boolean;
  showPropertiesandAssets:boolean;
  checked:boolean;

  constructor() {
    this.checked=false;
   }

  ngOnInit() {
    this.setSteps();

    const requestList= this.createRequestList();
    this.requestCombo=this.buildStringCombo(requestList);

    this.requestSelected='0000000002349189';
    
  }

  // COMPONENTE ETAPAS
  setSteps() {
    this.steps = [{
      label: 'Solicitante',
      command: (event: any) => {
        this.activeIndex = 0;
      }
    },
    {
      label: 'Amparados',
      command: (event: any) => {
        this.activeIndex = 1;
      }
    },
    {
      label: 'Documentos',
      command: (event: any) => {
        this.activeIndex = 2;
      }
    }
    ];
  }
  backStep() {
    console.log('back', this.activeIndex)
    if (this.activeIndex != 0) {
      if (this.validateBackstage(this.activeIndex)) {
        this.activeIndex--;
        this.executebystep();
      }
    }
    this.executebystep();
  }

  nextStep() {
    console.log('next', this.activeIndex)
    if (this.activeIndex != 4) {
      if (this.validateNextstage(this.activeIndex)) {
        this.activeIndex++;
        this.executebystep();
      }
    }
  }
  validateBackstage(stepCurrentNumber: number): boolean {
    let isValid: boolean = false;
    if (stepCurrentNumber == 0) {

    } else {
      isValid = true;
    }
    return isValid;
  }
  executebystep() {
    if (this.activeIndex == 0) {

    }
    if (this.activeIndex == 1) {

    }
    if (this.activeIndex == 2) {


    }
    if (this.activeIndex == 3) {




    }
    if (this.activeIndex == 4) {




    }
  }
  validateNextstage(stepCurrentNumber: number): boolean {
    let isValid: boolean = false;
    //Etapas validas
    if (stepCurrentNumber == 0) {
      isValid = true;
    }
    if (stepCurrentNumber == 1) {
      isValid = true;
    }
    if (stepCurrentNumber == 2) {

      isValid = true;
    }
    if (stepCurrentNumber == 3) {

      isValid = true;
    }

    return isValid;
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
  createRequestList(): string[] {
    let countryList: string[] = [];
    countryList.push("0000000002349189");
    countryList.push("0000000002349190");
    countryList.push("0000000002349191");

    return countryList;
  }
  openCard(id:string)
  {
    console.log('Abrio la  card');
    console.log('valor de checked',this.checked)
    if(id=='1')
    {
      this.showpersonalInformation=true;
      // this.showworkingInformation=false;
      // this.showhousingInformation=false;
      // this.showPropertiesandAssets=false;
    }
    if(id=='2')
    {
      // this.showpersonalInformation=false;
      this.showworkingInformation=true;
      // this.showhousingInformation=false;
      // this.showPropertiesandAssets=false;
    }
    if(id=='3')
    {
      // this.showpersonalInformation=false;
      // this.showworkingInformation=false;
      this.showhousingInformation=true;
      // this.showPropertiesandAssets=false;
    }
    if(id=='4')
    {
      // this.showpersonalInformation=false;
      // this.showworkingInformation=false;
      // this.showhousingInformation=false;
      this.showPropertiesandAssets=true;
    }
  }
}
