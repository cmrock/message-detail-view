import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Msg } from './msg';
import { MESSAGES } from './messages';

@Injectable()
export class MessageService {

  constructor() { }

  /*
  * Function to return all the messages
  * */
  getMessages(): Observable<Msg[]> {
    return of(MESSAGES);
  }

  /*
  * @params ( id )
  * Function to return message by id
  * */
  getMessage(id: number) : Observable<Msg>{
  	return of(MESSAGES.find(msg => msg.id === id))
  }

}
