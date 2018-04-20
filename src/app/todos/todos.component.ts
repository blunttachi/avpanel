import { Component, OnInit, enableProdMode } from '@angular/core';
import {Observable} from "rxjs/Observable";
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent implements OnInit {
  todos; //where todos are being returned

  constructor(private http: HttpClient) {}

  ngOnInit() {
    const httpOptions = {headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,OPTIONS'})};

    this.http.get('assets/todos.json').subscribe(data =>{
            this.todos = data.todo;
    }, (err: HttpErrorResponse) => {
      console.log(err.error);
    }); 

  // getData() {
  //   var xhttp = new XMLHttpRequest();
  //   var data = new Array();
  //   var json;

  //   xhttp.overrideMimeType("application/json");
  //   xhttp.open("GET", 'assets/todos.json', true);
  //   xhttp.onreadystatechange = function () {
  //     var DONE = 4; // readyState 4 means the request is done.
  //     var OK = 200; // status 200 is a successful return.

  //     if (xhttp.readyState === DONE) {
  //       if (xhttp.status === OK) {
  //         json = JSON.parse(xhttp.responseText);
  //         console.log(json.todo);
  //         for (var x in json.todo) {
  //           data.push(json.todo[x]);
  //         }
  //       } else {
  //         console.log('Error: ' + xhttp.status); // An error occurred during the request.
  //       }
  //     }
  //   };
  //   xhttp.send(null);
  //   return data;
  // }

}
