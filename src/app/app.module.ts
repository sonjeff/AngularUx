import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbCardModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { StepComponent } from './components/step/step.component';

import { NbSidebarModule, NbButtonModule } from '@nebular/theme';
import { CustomerInformationComponent } from './components/customer-information/customer-information.component';
import { HousingInformationComponent } from './components/housing-information/housing-information.component';
import {TabPanel, TabViewModule} from 'primeng/tabview';


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
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbSidebarModule, 
    NbButtonModule,
    NbCardModule,
    TabViewModule,TabPanel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
