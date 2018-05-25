import { Routes } from '@angular/router';
import { PeersComponent } from './peers/peers.component';
import { UploadComponent } from './upload/upload.component';
import { GithubComponent } from './github/github.component';

export const ROUTES: Routes = [
  { path: 'peers', component: PeersComponent },
  { path: 'upload', component: UploadComponent },
  { path: 'github', component: GithubComponent },
  { path: '**', redirectTo: '' }

];
