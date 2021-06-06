import { Component, OnInit } from '@angular/core';
import { Locationservice } from './location.service';
import { Position } from './position';

@Component({
  selector: 'app-housing-information',
  templateUrl: './housing-information.component.html',
  styleUrls: ['./housing-information.component.css']
})
export class HousingInformationComponent implements OnInit {

  displayi: boolean;
  options = [];
  dat: String;
  selectedValues: string[] = ['val1', 'val2'];

  center: Position;
  realPosition: Position;
  mapedit: boolean;
  zoom = 5;
  zoomx1=15;
  display?: google.maps.LatLngLiteral;

  //latitude:number;
  //longitude:number;
  //lat=6.290998;
  //long=-75.57193;

  constructor(private location: Locationservice) {
    this.options = ['MEFIA'];
    this.center = new Position();
    this.mapedit = false;

  }

  ngOnInit(): void {
    //this.center={lat:this.latitude , lng: this.longitude-};
    this.getLocation();
    this.mapedit = true;

  }

  showDialog() {
    this.displayi = true;
  }

  getLocation(): Position {

    this.location.getPosition().then(pos => {
      //this.latitude = pos.lat;
      //this.longitude = pos.lng;
      this.center['lat'] = pos.lat;
      this.center['lng'] = pos.lng;
    });
    return this.realPosition = { lat: this.center['lat'], lng: this.center['lng'] };
  }
}
