import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})

export class ServerComponent {
  serverId: number = 10
  serverStatus: boolean = true;

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? true : false
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus ? 'green' : 'red'
  }
}
