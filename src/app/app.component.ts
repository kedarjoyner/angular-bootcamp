import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showHide: boolean;
  clickCount = 0;
  clicks = [];


  displayClicks() {
    this.showHide = !this.showHide;
    this.clickCount++;
    console.log(this.clickCount);
    this.clicks.push(this.clickCount);
    console.log(this.clicks);
  }


}
