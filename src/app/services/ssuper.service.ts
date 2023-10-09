import { Injectable } from '@angular/core';

@Injectable()
export class SsuperService {
  messages: Array<any> = [];

  constructor() {
    this.init();
  }

  init(): void {
    this.insert({
      name: "Carlos",
      email: "arlo252@gmail.com",
      message: "Hello Mom"
    });
    this.insert({
      name: "Carlito",
      email: "arlo252@gmail.com",
      message: "Hello Mommy"
    });
    this.insert({
      name: "Carl",
      email: "arlo252@gmail.com",
      message: "Hello Momma"
    });
 }

  insert(message: {name: string, email: string, message: string}): void {
    this.messages.push(message);
  }

  getAllMessages(): any[] {
    return this.messages;
  }

  deleteMessage(index: number): void {
    this.messages.splice(index, 1);
  }
}
