import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  
  
  constructor( ){
   

  }

  center={lat: 10000000, lng:-2000000};
  zoom= 15;
  //display?:google.maps.LatLngLiteral;

 
}
