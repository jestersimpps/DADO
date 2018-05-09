import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

declare let Ipfs;
declare let Buffer;

@Injectable()
export class PeersService {
  public ipfs;
  public peersChange: EventEmitter<string[]> = new EventEmitter();

  constructor() {
    const options = {
      repo: 'ipfs-' + Math.random() + Date.now().toString(),
      config: {
        Addresses: {
          Swarm: ['/dns4/ws-star.discovery.libp2p.io/tcp/443/wss/p2p-websocket-star'],
        },
      },
    };
    this.ipfs = new Ipfs(options);
  }

  init() {
    this.ipfs.once('start', () =>
      this.ipfs.id((err, id) => {
        if (err) {
          return console.error(err);
        }
        setInterval(() => {
          this.refreshPeers();
        }, 1000);
      }),
    );
  }

  refreshPeers() {
    this.ipfs.swarm.peers((err, peers) => {
      if (err) {
        return console.error(err);
      }
      this.peersChange.emit(
        peers.map((peer) => {
          if (peer.addr) {
            const addr = peer.addr.toString();
            if (addr.indexOf('ipfs') >= 0) {
              return addr;
            } else {
              return addr + peer.peer.id.toB58String();
            }
          }
        }),
      );
    });
  }
}
