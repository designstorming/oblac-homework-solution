import { Injectable, OnDestroy } from '@angular/core';
import { WebSocketSubject, WebSocketSubjectConfig, webSocket } from 'rxjs/webSocket';
import { ComRequestMessage, ComResponseMessage } from '../models';


const COM_CONFIG: WebSocketSubjectConfig<ComResponseMessage> = {
  url: 'ws://localhost:3437',
}

@Injectable({
  providedIn: 'root'
})
export class CommunicationServiceTsService implements OnDestroy {

  readonly #ws$ = webSocket<ComResponseMessage>(COM_CONFIG);

  readonly #listeners!: WebSocketSubject<ComResponseMessage>[];

  constructor() {}

  // TODO: Client can start multiple monitorings for different parts of the UI.
  // When the client disconnects, all of his previously started monitorings
  // will be stopped.
  start(options: ComRequestMessage) {

  }

  stop(options: ComRequestMessage) {

  }

  ngOnDestroy(): void {
    this.#ws$.complete();
  }
}
