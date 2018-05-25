import { Component, ViewChild, TemplateRef, OnInit, OnDestroy } from '@angular/core';
import { IpfsService } from './ipfs.service';
import { Subscription } from 'rxjs';
import { select } from '@angular-redux/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isCollapsed = false;
  triggerTemplate = null;
  // private peers: string[] = [];
  private peersSubscription: Subscription;

  @ViewChild('trigger') customTrigger: TemplateRef<void>;
  @select() peers;

  constructor(private ipfsService: IpfsService) {}

  changeTrigger(): void {
    this.triggerTemplate = this.customTrigger;
  }
  ngOnInit() {}
}
