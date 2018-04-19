import { Component, OnInit, enableProdMode } from '@angular/core';
import { TODOS } from '../mock-todos';
import { get } from 'selenium-webdriver/http';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos = TODOS;
  constructor() { }
  ngOnInit() {
    
    var xhttp = new XMLHttpRequest();
    var data;
    xhttp.overrideMimeType("application/json");
    xhttp.open("GET", 'assets/todos.json', true);
    xhttp.onreadystatechange = function () {
      var DONE = 4; // readyState 4 means the request is done.
      var OK = 200; // status 200 is a successful return.
      if (xhttp.readyState === DONE) {
        if (xhttp.status === OK) {
          data = JSON.parse(xhttp.responseText);
          console.log(data.todo.task); // 'This is the output.'
        } else {
          console.log('Error: ' + xhttp.status); // An error occurred during the request.
        }
      }
    };
    
    xhttp.send(null);
  }

}
