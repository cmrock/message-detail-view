import { Component, OnInit } from '@angular/core';
import { Msg } from '../msg';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
  messages: Msg[] = [];

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.getMessages();
  }
  /*
  * Function to get all the messages from messageService
  * sort all messages in descending manner and store it in this.messages
  * */
  getMessages() {
    this.messageService.getMessages()
      .subscribe(messages => this.messages = messages.sort((a, b) => a.date >b.date ? -1 : a.date < b.date ? 1 : 0));
  }
}
