import { Component, OnInit } from '@angular/core';
import {} from '../todo.module'
import { ToDo } from 'src/app/models/todo.model';
@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  item: ToDo = new ToDo();

  constructor() { }

  ngOnInit() {

  }

  addTodo(){
      console.log(this.item);
  }

}
