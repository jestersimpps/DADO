import { Routes } from '@angular/router';
import { PeersComponent } from './peers/peers.component';

export const ROUTES: Routes = [
  { path: 'peers', component: PeersComponent },
  { path: '**', redirectTo: '' }

];
