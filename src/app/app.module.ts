import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbStepperModule, NbCardModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { StepComponent } from './components/step/step.component';

import { NbSidebarModule, NbButtonModule } from '@nebular/theme';
import { CustomerInformationComponent } from './components/customer-information/customer-information.component';
import { HousingInformationComponent } from './components/housing-information/housing-information.component';
import { FormsModule } from '@angular/forms';
import {StepsModule} from 'primeng/steps';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';


@NgModule({
  declarations: [
    AppComponent,
    StepComponent,
    CustomerInformationComponent,
    HousingInformationComponent,

    
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
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
