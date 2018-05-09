import { Component, OnInit, OnDestroy } from '@angular/core';
import { PeersService } from './peers.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs';
import { trigger, state, style, animate, transition, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-peers',
  templateUrl: './peers.component.html',
  styleUrls: ['./peers.component.css'],
  providers: [PeersService],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':leave', [stagger(100, [animate('0.5s', style({ opacity: 0 }))])], { optional: true }),
        query(':enter', [style({ opacity: 0 }), stagger(100, [animate('0.5s', style({ opacity: 1 }))])], { optional: true }),
      ]),
    ]),
  ],
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
    // TODO: figure out why this updates the dom, and not inside the subscription
    setInterval(() => {
      this.peers.concat([]);
    }, 1000);
  }

  ngOnDestroy() {
    this.peersSubscription.unsubscribe();
  }
}
