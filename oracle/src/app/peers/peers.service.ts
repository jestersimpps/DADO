import { Injectable } from '@angular/core';
declare const Ipfs;
declare let Buffer;

@Injectable()
export class PeersService {
  public ipfs;
  public peers;

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
    Buffer = this.ipfs.types.Buffer;

    this.ipfs.once('start', () =>
      this.ipfs.id((err, id) => {
        if (err) {
          return console.error(err);
        }
        // setInterval(refreshPeerList, 1000);
      }),
    );
  }

  refreshPeerList() {
    this.ipfs.swarm.peers((err, peers) => {
      if (err) {
        return console.error(err);
      }
      this.peers = peers;
    });
  }
}
