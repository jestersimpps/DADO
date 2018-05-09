import { Component, ViewChild, TemplateRef, OnInit, OnDestroy } from '@angular/core';
import { IpfsService } from './ipfs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isCollapsed = false;
  triggerTemplate = null;

  @ViewChild('trigger') customTrigger: TemplateRef<void>;

  constructor(private ipfsService: IpfsService) {}

  changeTrigger(): void {
    this.triggerTemplate = this.customTrigger;
  }
  ngOnInit() {
    this.ipfsService.init();
  }
}
