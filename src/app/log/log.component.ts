import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  // record : Array<{ "change": number; "choice": string; }> = [];
  records = [];
  constructor(private _storage_service: StorageService) { }
  ngOnInit() {
    console.log(this._storage_service.getRecord())
    this.records = this._storage_service.getRecord();
  }

}
