import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbStepperModule, NbCardModule, NbTreeGridModule, NbTabsetModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { StepComponent } from './components/step/step.component';

import { NbSidebarModule, NbButtonModule } from '@nebular/theme';
import { CustomerInformationComponent } from './components/customer-information/customer-information.component';
import { HousingInformationComponent } from './components/housing-information/housing-information.component';
import { FormsModule } from '@angular/forms';
import {StepsModule} from 'primeng/steps';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule, } from '@angular/material/grid-list';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CalendarModule} from 'primeng/calendar';
import {DropdownModule} from 'primeng/dropdown';
import {CheckboxModule} from 'primeng/checkbox';
import {InputTextModule} from 'primeng/inputtext';
import { DiligenceInformationComponent } from './components/diligence-information/diligence-information.component';

@NgModule({
  declarations: [
    AppComponent,
    StepComponent,
    CustomerInformationComponent,
    HousingInformationComponent,
    DiligenceInformationComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbLayoutModule,
    NbEvaIconsModule,
    NbSidebarModule, 
    NbButtonModule,
    NbStepperModule,
    NbThemeModule.forRoot(),
    NbCardModule,
    FormsModule,
    StepsModule,
    ButtonModule,
    CardModule,
    DropdownModule,
    CalendarModule,
    CheckboxModule,
    InputTextModule,
    NbTreeGridModule, NbTabsetModule, MatCardModule, MatToolbarModule, MatButtonModule, FlexLayoutModule, MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
