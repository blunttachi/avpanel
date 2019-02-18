import { Component, OnInit, enableProdMode } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Todo } from '../todo';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  providers: [TodoService],
  styleUrls: ['./todos.component.css']
})

export class TodosComponent implements OnInit {
  todos: Todo[]; //where todos are being returned
  interval: any;
  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.getTodos();
    this.interval = setInterval(() => { 
      this.getTodos(); 
    }, 1000*60);
  }

  getTodos(): void {
    this.todoService.getTodos()
      .subscribe(todos => this.todos = todos);
  }

  setTodo(task:string){
    const newTodo: Todo = {task} as Todo;
    this.todoService.setTodo(newTodo).subscribe(todo => this.todos.push(todo));
  }

  removeTodo(todo: Todo){
    this.todos = this.todos.filter(t => t !== todo);
    this.todoService.removeTodo(todo._id).subscribe();
  }

}
