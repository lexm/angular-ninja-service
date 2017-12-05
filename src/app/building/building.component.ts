import { Component, OnInit, Input } from '@angular/core';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.css']
})
export class BuildingComponent implements OnInit {
  @Input() myBldg;
  @Input() idx;
  constructor(private _storage: StorageService) { }
  getBldg(idx) {}
  enterBldg(idx) {
    // console.log(this._storage.getBldg(idx));
    this._storage.enterBldg(idx);
  }
  ngOnInit() {
    // this.enterBldg = this._storage.enterBldg;
    this.getBldg = this._storage.getBldg;
  }

}
