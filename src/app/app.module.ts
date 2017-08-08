import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NotificationsComponent } from './notifications/notifications.component';
import { WarningComponent } from './warning/warning.component';
import { SuccessComponent } from './success/success.component';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent, 
    NotificationsComponent, WarningComponent, SuccessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
