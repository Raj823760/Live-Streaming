import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { StreamnIOComponent } from './streamn-io/streamn-io.component';
import { LiveRoutingModule } from './live-routing.module';



@NgModule({
  declarations: [StreamnIOComponent],
  imports: [
    CommonModule,
    LiveRoutingModule
  ]
})
export class LiveStreamingModule { }
