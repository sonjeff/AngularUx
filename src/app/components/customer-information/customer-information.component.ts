import { Component, OnInit } from '@angular/core';
import { PersonalInformation } from 'src/app/Models/personalInformation';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-customer-information',
  templateUrl: './customer-information.component.html',
  styleUrls: ['./customer-information.component.css']
})
export class CustomerInformationComponent implements OnInit {

  steps: any[] = [];
  activeIndex: number = 0;
  personalInformation: PersonalInformation = new PersonalInformation();
  items: MenuItem[];
  constructor() { }

  ngOnInit() {
    this.setSteps();
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

}
