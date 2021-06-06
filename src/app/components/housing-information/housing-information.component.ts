import { Component, OnInit } from '@angular/core';
import {Locationservice} from './location.service';

@Component({
  selector: 'app-housing-information',
  templateUrl: './housing-information.component.html',
  styleUrls: ['./housing-information.component.css']
})
export class HousingInformationComponent implements OnInit {

  displayi:boolean;
  options=[];
  dat:String;
  selectedValues: string[] = ['val1','val2'];

  center: any={};
  zoom= 15;
  display?:google.maps.LatLngLiteral;

  latitude:number;
  longitude:number;
  lat:number;
  long:number;

  constructor(private location: Locationservice) {
    this.options=['MEFIA','PACÍFICO','PICHINCHA'];
    this.lat=6.290998;
    this.long=-75.57193;
    this.center={lat:this.lat , lng: this.long};

   }

  ngOnInit(): void {
    //this.center={lat:this.latitude , lng: this.longitude-};
    this.getLocation();
  }

  showDialog() {
    this.displayi = true;
   
}

getLocation(){

      this.location.getPosition().then(pos => {
          this.latitude = pos.lat;
          this.longitude = pos.lng;
      });
      console.log('mis coordenadas son:'+this.latitude + this.longitude);
      
}

putlocation(place:any){

}
}
