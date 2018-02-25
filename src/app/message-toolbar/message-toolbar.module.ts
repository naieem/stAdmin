import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageToolbarComponent } from './message-toolbar/message-toolbar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MessageToolbarComponent],
  exports:[
    MessageToolbarComponent
  ]
})
export class MessageToolbarModule { }
