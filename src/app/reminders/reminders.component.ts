import { Component, OnInit, enableProdMode } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Reminder } from '../reminder';
import { ReminderService } from './reminder.service';

@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.component.html',
  providers: [ReminderService],
  styleUrls: ['./reminders.component.css']
})
export class RemindersComponent implements OnInit {

  reminders: Reminder[]; //where todos are being returned
  interval: any;
  constructor(private reminderService: ReminderService) {}

  ngOnInit() {
    this.getReminders();
    this.interval = setInterval(() => { 
      this.getReminders(); 
    }, 1000*60);
  }

  getReminders(): void {
    this.reminderService.getReminders()
      .subscribe(reminders => this.reminders = reminders);
  }

  setReminder(task:string){
    const newReminder: Reminder = {task} as Reminder;
    this.reminderService.setReminder(newReminder).subscribe(reminder => this.reminders.push(reminder));
  }

  removeReminder(reminder: Reminder){
    this.reminders = this.reminders.filter(t => t !== reminder);
    this.reminderService.removeReminder(reminder._id).subscribe();
  }
}
