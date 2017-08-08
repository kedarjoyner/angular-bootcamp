import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
// tells typescript to use ServerComponent
import { ServerComponent } from './server/server.component';

/* Angular uses components to build web pages 
 * and uses modules to bundle different pieces 
 * of the app into packages 
*/

@NgModule({
  declarations: [
    AppComponent, 
    ServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
