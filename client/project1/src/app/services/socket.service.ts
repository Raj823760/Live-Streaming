import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  currentDocument = this.socket.fromEvent<Document>('document');
  constructor(private socket: Socket) { }

  getRead(id: string) {
    this.socket.emit('read', id);
  }
}
