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
import { StepsModule } from 'primeng/steps';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule, } from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';

import { TabViewModule } from 'primeng/tabview';

import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { DiligenceInformationComponent } from './components/diligence-information/diligence-information.component';
import { DialogModule } from 'primeng/dialog';
import {RadioButtonModule} from 'primeng/radiobutton';



//Módulo de GoogleMaps
import { GoogleMapsModule } from '@angular/google-maps';
import {Locationservice} from './components/housing-information/location.service';
import { PropertiesOrAssetsComponent } from './components/properties-or-assets/properties-or-assets.component';
import {TableModule} from 'primeng/table';
import { WorkingInformationComponent } from './components/working-information/working-information.component';
import {MatIconModule} from '@angular/material/icon';
import DriveEtaIcon from '@material-ui/icons/DriveEta';

@NgModule({
  declarations: [
    AppComponent,
    StepComponent,
    CustomerInformationComponent,
    HousingInformationComponent,
    DiligenceInformationComponent,
    PropertiesOrAssetsComponent,
    WorkingInformationComponent,


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

    NbTreeGridModule,
    NbTabsetModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    MatGridListModule,
    TabViewModule,
    CardModule,
    DropdownModule,
    CalendarModule,
    CheckboxModule,
    InputTextModule,
    NbTreeGridModule,
    NbTabsetModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    MatGridListModule,
    DialogModule,
    GoogleMapsModule,
    RadioButtonModule,
    TableModule,
    MatIconModule

  ],
  providers: [Locationservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
