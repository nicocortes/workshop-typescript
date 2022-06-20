import { Chance } from 'chance';
import { Mappable } from './CustomMap';

const type = new Chance();

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'red';

  constructor() {
    this.name = type.name();
    this.location = {
      lat: type.latitude(),
      lng: type.longitude()
    };
  }

  markerContent(): string {
    return `User name: ${this.name}`;
  }
}
