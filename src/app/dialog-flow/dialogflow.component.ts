import { Component } from '@angular/core';
import { DialogflowService } from './dialogflow.service';

@Component({
  selector: 'app-dialogflow',
  templateUrl: './dialogflow.component.html',
  styleUrls: ['./dialogflow.component.css']
})
export class DialogflowComponent {
  query = '';
  response = '';
  messages:Message[] = [];

  constructor(private dialogflowService: DialogflowService) {}

  sendMessage(): void {
    const userMessage = new Message(this.query, 'user');
    this.messages.push(userMessage);
    this.dialogflowService.sendMessage(this.query)
      .subscribe((data: any) => {
        this.response = data.queryResult.fulfillmentText;
            const botMessage = new Message(this.response, 'bot');
            this.messages.push(botMessage);
        // Handle response as needed
      });
  }
}

export class Message {
    constructor(public content: string, public sentBy: string) {}
  }
