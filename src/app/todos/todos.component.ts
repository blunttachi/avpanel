import { Component, OnInit, enableProdMode } from '@angular/core';
import { get } from 'selenium-webdriver/http';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos = this.getData();
  
  
  constructor() { }
  ngOnInit() {
  }

  getData() {
        
    var xhttp = new XMLHttpRequest();
    var json;
    var data = new Array();
    xhttp.overrideMimeType("application/json");
    xhttp.open("GET", 'assets/todos.json', true);
    xhttp.onreadystatechange = function () {
      var DONE = 4; // readyState 4 means the request is done.
      var OK = 200; // status 200 is a successful return.
      if (xhttp.readyState === DONE) {
        if (xhttp.status === OK) {
          json = JSON.parse(xhttp.responseText);
          for (var x in json.todo){
            data.push(json.todo[x]);
          }
          console.log(data); // 'This is the output.'
        } else {
          console.log('Error: ' + xhttp.status); // An error occurred during the request.
        }
      }
    };
    xhttp.send(null);
    return data;
  }

}
