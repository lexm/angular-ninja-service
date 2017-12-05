import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {
  record = [];
  bldgs = [
    {
      "name": "Farm",
      "min": 2,
      "max": 5
    },
    {
      "name": "Cave",
      "min": 5,
      "max": 10
    },
    {
      "name": "Casino",
      "min": -100,
      "max": 100
    },
    {
      "name": "House",
      "min": 7,
      "max": 15
    }
  ];

  constructor() { }

  getRecord() {
    return this.record;
  }
  getBldgs() {
    console.log(this.bldgs);
    return this.bldgs;
  }
  getBldg(idx) {
    console.log(this.bldgs[idx]);
    return this.bldgs[idx];
  } 
  enterBldg(idx) {
    let bldg = this.bldgs[idx];
    let change = Math.floor((Math.random() * (bldg.max - bldg.min))) + bldg.min;
    this.record.push({ "change": change, "choice": bldg.name});
    return change;
  }
}
