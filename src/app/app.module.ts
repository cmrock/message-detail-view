import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { InboxComponent } from './inbox/inbox.component';
import { MessageDetailsComponent } from './message-details/message-details.component';
import { MessageService }          from './message.service';

import { AvatarModule } from 'ngx-avatar';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    InboxComponent,
    MessageDetailsComponent
  ],
  imports: [
    BrowserModule,
    AvatarModule,
    AppRoutingModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
