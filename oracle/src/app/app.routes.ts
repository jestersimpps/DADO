import { Routes } from '@angular/router';
import { PeersComponent } from './peers/peers.component';
import { UploadComponent } from './upload/upload.component';

export const ROUTES: Routes = [
  { path: 'peers', component: PeersComponent },
  { path: 'upload', component: UploadComponent },
  { path: '**', redirectTo: '' }

];
