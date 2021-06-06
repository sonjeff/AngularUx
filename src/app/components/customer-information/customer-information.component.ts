import { Component, OnInit } from '@angular/core';
import { PersonalInformation } from 'src/app/Models/personalInformation';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-customer-information',
  templateUrl: './customer-information.component.html',
  styleUrls: ['./customer-information.component.css']
})
export class CustomerInformationComponent implements OnInit {

  personalInformation: PersonalInformation = new PersonalInformation();
  localeCalendar:any;
  processfileCombo:any;
  constructor()
  {

  }
  ngOnInit()
  {

  }

}
