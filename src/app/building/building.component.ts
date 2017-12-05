import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.css']
})
export class BuildingComponent implements OnInit {
  @Input() myBldg;
  @Input() idx;
  @Output() newGold = new EventEmitter();
  constructor(private _storage: StorageService) { }
  getBldg(idx) {}
  enterBldg(idx) {
    let change = this._storage.enterBldg(idx);
    this.newGold.emit(change);
  }
  ngOnInit() {
    this.getBldg = this._storage.getBldg;
  }
}
