import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { ClockService } from './clock.service';
import { TodoService } from './todos/todo.service';
import { MatListModule } from '@angular/material/list';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RemindersComponent } from './reminders/reminders.component';
import { ReminderService } from './reminders/reminder.service';


@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    RemindersComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
  ],
  providers: [
    HttpClientModule,
    ClockService,
    TodoService,
    ReminderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
