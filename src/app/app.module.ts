import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { TodoModule } from './todo-module/todo.module';
import { AboutComponent } from './layout/about/about.component';
import { RouterModule, Routes } from '@angular/router' 
import { TodoListComponent } from './todo-module/todo-list/todo-list.component';
import { AddTodoComponent } from './todo-module/add-todo/add-todo.component';

const routes: Routes = [
  {path: '', component: TodoListComponent},
  {path: 'about', component: AboutComponent},
  {path: 'add-todo', component: AddTodoComponent},
  {path: '**', redirectTo: ''}
];


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    TodoModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
