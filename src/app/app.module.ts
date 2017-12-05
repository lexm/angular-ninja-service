import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { BuildingComponent } from './building/building.component';
import { LogComponent } from './log/log.component';

import { StorageService } from './storage.service'


@NgModule({
  declarations: [
    AppComponent,
    BuildingComponent,
    LogComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
