import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DialogflowComponent } from './dialog-flow/dialogflow.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DialogflowService } from './dialog-flow/dialogflow.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, DialogflowComponent],
  imports: [BrowserModule, CommonModule, FormsModule,HttpClientModule],
  providers: [DialogflowService],
  bootstrap: [AppComponent],
})
export class AppModule {}
