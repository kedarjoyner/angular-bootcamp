import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'Test Server';
  serverCreated = false;
  constructor() {
  //called first time before the ngOnInit()
  /*  Normally we use constructor to define/initialize some variables and dependency injection, 
   *  but when we have tasks related to Angular's bindings we move to Angular's 
   * ngOnInit life cycle hook.
  */

  setTimeout(() => {
    this.allowNewServer = true;
  }, 2000);
}
  ngOnInit() {
     //called after the constructor and called  after the first ngOnChanges() 
  }

  // method
  onCreateServer() {
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
    this.serverCreated = true;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
