import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs';
import { trigger, state, style, animate, transition, keyframes, query, stagger } from '@angular/animations';
import { IpfsService } from '../ipfs.service';

@Component({
  selector: 'app-peers',
  templateUrl: './peers.component.html',
  styleUrls: ['./peers.component.css'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':leave', [stagger(100, [animate('2s', style({ opacity: 0, color: 'red' }))])], { optional: true }),
        query(':enter', [style({ opacity: 0, color: 'green' }), stagger(100, [animate('2s', style({ opacity: 1 }))])], {
          optional: true,
        }),
      ]),
    ]),
  ],
})
export class PeersComponent implements OnInit, OnDestroy {
  private peers: string[] = [];
  private peersSubscription: Subscription;

  constructor(private ipfsService: IpfsService) {}

  ngOnInit() {
    this.peersSubscription = this.ipfsService.peersChange.subscribe((peers) => {
      this.peers = peers;
    });
    // TODO: figure out why this updates the dom, and not inside the subscription
    setInterval(() => {
      this.peers.concat([]);
    }, 1000);
  }

  ngOnDestroy() {
    this.peersSubscription.unsubscribe();
  }
}
