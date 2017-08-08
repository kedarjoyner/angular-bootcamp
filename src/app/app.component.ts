import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // can add array of style files
  // styleUrls: ['./app.component.css']
  // can also add styles inline
  styles: [`
    h3 {
      color: dodgerblue;
    }
  `]
})
export class AppComponent {

}
