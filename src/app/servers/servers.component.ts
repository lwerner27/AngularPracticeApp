import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})

export class ServersComponent implements OnInit {

  allowNewServer: boolean = false;

  serverCreationStatus: string = "No server was created."

  serverName = 'Server1'

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = "Server was created!"
  }

  // This method is just here as an example but will probably never do this again.
  onUpdateServerName(event) {
    this.serverName = event.target.value
  }

}
