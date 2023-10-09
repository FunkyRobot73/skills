import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { FormsModule } from '@angular/forms';
import { MessageDetailsComponent } from './components/message-details/message-details.component';
import { SsuperService } from './services/ssuper.service';
import { MenuComponent } from './components/menu/menu.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    MessageDetailsComponent,
    MenuComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [SsuperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
