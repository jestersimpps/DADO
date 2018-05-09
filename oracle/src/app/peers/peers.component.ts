import { Component, OnInit, OnDestroy } from '@angular/core';
import { PeersService } from './peers.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-peers',
  templateUrl: './peers.component.html',
  styleUrls: ['./peers.component.css'],
  providers: [PeersService],
})
export class PeersComponent implements OnInit, OnDestroy {
  private peers: string[] = [];
  private peersSubscription: Subscription;

  constructor(private peersService: PeersService) {}

  ngOnInit() {
    this.peersService.init();
    this.peersSubscription = this.peersService.peersChange.subscribe((peers) => {
      this.peers = peers;
    });
    setInterval(() => {
      this.peers.concat([]);
      console.log(this.peers);
    }, 1000);
  }

  ngOnDestroy() {
    this.peersSubscription.unsubscribe();
  }
}
