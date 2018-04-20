import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { ClockService } from './clock.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatCardModule
  ],
  providers: [
    HttpClientModule,
    ClockService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
