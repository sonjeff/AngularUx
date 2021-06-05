import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  edit: boolean;
  
  constructor(private route: Router ){
    this.edit=this.edit;

  }

  change(){
    this.edit =!this.edit;
    this.route.navigate(['step']);
  }
}