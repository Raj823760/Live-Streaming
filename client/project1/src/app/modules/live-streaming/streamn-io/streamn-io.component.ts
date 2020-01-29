import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-streamn-io',
  templateUrl: './streamn-io.component.html',
  styleUrls: ['./streamn-io.component.scss']
})
export class StreamnIOComponent implements OnInit {

  constructor(private socket: SocketService) { }

  ngOnInit() {
    this.socket.getRead('Sec');
  }

}
