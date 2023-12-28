import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogflowService {
  private baseURL = 'https://dialogflow.googleapis.com/v2/projects/chatbot-hackathon-odou/agent/sessions/SESSION_ID:detectIntent';
  private token = 'ya29.a0AfB_byDmSTZUH2EzYtcqCsksRgTtLwiOyg4fut1WttVa57AVbM021vaSwdxCZZ2sTIUDBNN8-icKT1ToJ_sXKxXc7W7maQJqRCwyJeINkvLGFJ0-_oTUWDk6TPbuQKiyF99A9zWsQCk6g49hqytbkfCtOyHoGb2j8IrcvwaCgYKAZcSARESFQHGX2MiA-z3TgJ4lcD0q94sseIfIQ0173';
  private quotaProjectId='chatbot-hackathon-odou';
  constructor(private http: HttpClient) { }

  sendMessage(query: string): Observable<any> {
    const data = {
      queryInput: {
        text: {
          text: query,
          languageCode: 'en-US'
        }
      }
    };

    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${this.token}`)
      .set('Content-Type', 'application/json')
      .set('x-goog-user-project',this.quotaProjectId);

    return this.http.post(this.baseURL, data, { headers });
  }
}
