import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { FormsModule } from "@angular/forms"
@NgModule({
  declarations: [
    TodoListComponent, 
    TodoItemComponent, AddTodoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TodoListComponent
  ]
})

export class TodoModule { }
