import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PeersComponent } from './peers/peers.component';

import { ROUTES } from './app.routes';
import { UploadComponent } from './upload/upload.component';
import { IpfsService } from './ipfs.service';

@NgModule({
  declarations: [AppComponent, PeersComponent, UploadComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot(),
    CommonModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [IpfsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
