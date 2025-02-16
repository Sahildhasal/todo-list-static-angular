import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Todo } from '../interface/todo';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [
    ReactiveFormsModule, 
    CommonModule, 
    MatDatepickerModule, 
    MatNativeDateModule, 
    MatInputModule, 
    MatFormFieldModule
  ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent{
  todoForm: FormGroup;
  todoFormArray: Todo[] = [{taskName: 'Coding', taskDescription: 'Do Coding', dueDate: new Date()}];  // ✅ Correctly initialized
  isUpdateOperation: boolean = false;
  updateIndex: number | undefined;
  constructor() {
    this.todoForm = new FormGroup({
      taskName: new FormControl('', Validators.required),
      taskDescription: new FormControl('', Validators.required),
      dueDate: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
  
    const myTodo: Todo = {
      taskName: this.todoForm.get('taskName')?.value || '',
      taskDescription: this.todoForm.get('taskDescription')?.value || '',
      dueDate: this.todoForm.get('dueDate')?.value?.toString() || ''
    };

    if(this.isUpdateOperation && this.updateIndex != undefined){
      this.todoFormArray[this.updateIndex] = myTodo;
    }
    else {
      this.todoFormArray.push(myTodo); 
    }
    this.updateIndex = undefined;
    this.isUpdateOperation = false;
    this.todoForm.reset();  // ✅ Clear the form after submission
  }

  deleteTodo(index: number) {
    this.todoFormArray.splice(index, 1);
  }

  editTodo(index: number) {
    let data = this.todoFormArray[index];
    this.todoForm.patchValue({taskName: data.taskName, taskDescription: data.taskDescription, dueDate: new Date(data.dueDate)})
    this.isUpdateOperation = true;
    this.updateIndex = index;

    const myTodo: Todo = {
      taskName: this.todoForm.get('taskName')?.value || '',
      taskDescription: this.todoForm.get('taskDescription')?.value || '',
      dueDate: this.todoForm.get('dueDate')?.value?.toString() || ''
    };
  }

  isOverdue(date: Date): boolean {
    return new Date(date) < new Date();
  }
}
