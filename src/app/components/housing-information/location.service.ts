import {Injectable} from '@angular/core';
//import { Observable } from 'rxjs';

@Injectable()
export class  Locationservice{

    getPosition(): Promise<any> {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resp => {
                    resolve({lng: resp.coords.longitude, lat: resp.coords.latitude});
                },
                err => {
                    reject(err);
              });
        });
    }
}