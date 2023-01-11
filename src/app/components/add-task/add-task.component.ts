import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Task } from 'src/app/Task';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  showAddTask: boolean = false;

  constructor(private uiService: UiService) {
    this.uiService.onToggle().subscribe((value) => {
      this.showAddTask = value;
    });
  }

  ngOnInit(): void {}

  addForm = new FormGroup({
    text: new FormControl(null, Validators.required),
    day: new FormControl(null, Validators.required),
    reminder: new FormControl(false),
  });

  onSubmit(): void {
    const newTask: any = this.addForm.getRawValue();
    if (!this.addForm.valid) {
      alert('All fields must be valid! Try again');
      return;
    }
    this.onAddTask.emit(newTask);
    this.addForm.reset();
    this.uiService.toggleAddTask();
  }
}
