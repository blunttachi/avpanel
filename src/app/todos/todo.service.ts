import { HttpHandler, HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import { Todo } from "../todo";
import { Injectable } from "@angular/core";
import { catchError } from "rxjs/operators";


// const httpOptions = {
//     headers: new HttpHeaders({
//       'Content-Type':  'application/json',
//       'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
//     })
//   };

@Injectable()
export class TodoService {
    // url = 'https://api.myjson.com/bins/yp9oj';
    url = 'http://localhost:3000/todos';
    constructor (private http: HttpClient){}

    getTodos(): Observable<Todo[]>{
        return this.http.get<Todo[]>(this.url);
    }

    setTodo(todo: Todo): Observable<Todo>{
        return this.http.post<Todo>(this.url, todo);
    }

    removeTodo(id: string){
        const itemUrl = this.url + "/" + id;
        return this.http.delete(itemUrl);
    }
}