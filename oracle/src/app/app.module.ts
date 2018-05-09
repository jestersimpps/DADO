import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PeersComponent } from './peers/peers.component';

import { ROUTES } from './app.routes';

@NgModule({
  declarations: [AppComponent, PeersComponent],
  imports: [BrowserModule, BrowserAnimationsModule, NgZorroAntdModule.forRoot(), CommonModule, FormsModule, RouterModule.forRoot(ROUTES)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
