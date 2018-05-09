import { Component, OnInit } from '@angular/core';
import { PeersService } from './peers.service';

@Component({
  selector: 'app-peers',
  templateUrl: './peers.component.html',
  styleUrls: ['./peers.component.css'],
  providers: [PeersService],
})
export class PeersComponent implements OnInit {
  constructor(private peersService: PeersService) {}

  ngOnInit() {
    this.peersService.init();
  }
}
