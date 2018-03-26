import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from '../message.service';

import { Msg } from '../msg';

@Component({
  selector: 'app-message-details',
  templateUrl: './message-details.component.html',
  styleUrls: ['./message-details.component.css']
})
export class MessageDetailsComponent implements OnInit {

  @Input() message: Msg;

  constructor(private route: ActivatedRoute, private messageService: MessageService,) { }

  ngOnInit() {
  	this.getMsg();
  }

  /*
  * Function to get message by id from messageService
  * and get the message id from url
  * */
  getMsg() {
  	const id = +this.route.snapshot.paramMap.get('id');
    this.messageService.getMessage(id)
      .subscribe(message => this.message = message);
  }
}
