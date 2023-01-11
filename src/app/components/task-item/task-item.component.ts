import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task: any;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  editForm = this.fb.group({
    text: '',
    day: '',
    reminder: false,
  });

  onDelete(task: Task) {
    this.onDeleteTask.emit(task);
  }
  
  onToggle(task: Task) {
    this.onToggleReminder.emit(task);
  }
}
