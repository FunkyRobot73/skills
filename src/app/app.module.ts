import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { FormsModule } from '@angular/forms';
import { MessageDetailsComponent } from './components/message-details/message-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    MessageDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
