import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { IAppState } from './store';
import { NgRedux } from '@angular-redux/store';
import { UPDATE_PEERS } from './actions';

declare let Ipfs;

@Injectable()
export class IpfsService {
  public ipfs;

  constructor(private ngRedux: NgRedux<IAppState>) {
    const options = {
      repo: 'ipfs-' + Math.random() + Date.now().toString(),
      config: {
        Addresses: {
          Swarm: [
            // '/dns4/wrtc-star.discovery.libp2p.io/tcp/443/wss/p2p-webrtc-star',
            '/dns4/ws-star.discovery.libp2p.io/tcp/443/wss/p2p-websocket-star',
          ],
        },
      },
    };
    this.ipfs = new Ipfs(options);
    this.init();
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
      this.ngRedux.dispatch({
        type: UPDATE_PEERS,
        peers: peers.map((peer) => {
          if (peer.addr) {
            const addr = peer.addr.toString();
            if (addr.indexOf('ipfs') >= 0) {
              return addr;
            } else {
              return addr + peer.peer.id.toB58String();
            }
          }
        }),
      });
    });
  }
}
