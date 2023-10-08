import { Component } from '@angular/core';
import { SsuperService } from 'src/app/services/ssuper.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent {

  name: string = "";
  email: string = "";
  message: string = "";
  isSubmitted: boolean = false;
  messages: Array<any> = [];

  constructor(
    private service: SsuperService
  ) {
    this.messages = this.service.getAllMessages();
    this.isSubmitted = this.messages.length > 0;
  }

  onSubmit() : void {
    this.isSubmitted = true;
    this.service.insert({
      "name": this.name,
      "email": this.email,
      "message": this.message
    });
    console.log(this.messages);
    
  };

  deleteMessage(index: number):void {
    this.service.deleteMessage(index);
  }
}
