import { Component } from '@angular/core';
import { StorageService } from './storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // gold = 0;
  title = 'Ninja Gold!';
  bldgs = [];
  getGold() {
    // return _storage.getGold();
  };
  constructor(_storage:StorageService) {
    // this.gold = _storage.getGold();
    this.bldgs = _storage.getBldgs();
    this.getGold = _storage.getGold;
  }
  ngOnInit() {
    
  }
}