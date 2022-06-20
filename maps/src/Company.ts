import { Chance } from 'chance';
import { Mappable } from './CustomMap';

const type = new Chance();

export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'blue';

  constructor() {
    this.companyName = type.company();
    this.catchPhrase = type.hashtag();
    this.location = {
      lat: type.latitude(),
      lng: type.longitude()
    };
  }

  markerContent(): string {
    return `Company name: ${this.companyName}`;
  }
}
