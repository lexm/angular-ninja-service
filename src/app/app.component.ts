import { Component } from '@angular/core';
import { StorageService } from './storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gold = 0;
  title = 'Ninja Gold!';
  bldgs = [];

  constructor(_storage:StorageService) {
    this.bldgs = _storage.getBldgs();
  }

  addGold(change) {
    this.gold += change;
  }
}