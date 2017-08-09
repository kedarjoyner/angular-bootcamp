import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  constructor() {
  /* A constructor is a method executed at the point 
   * of time this component is created by Angular 
  */
  setTimeout(() => {
    this.allowNewServer = true;
  }, 2000);
}
  ngOnInit() {
  }

}
