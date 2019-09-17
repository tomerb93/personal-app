import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { TasksService } from '../tasks.service';

@Component({
    selector: 'app-tasks-create',
    templateUrl: './tasks-create.component.html',
    styleUrls: ['./tasks-create.component.css']
})
export class TasksCreateComponent implements OnInit {
    taskForm: FormGroup;
    toggleCreateTaskForm = false;

    constructor(
        private tasksService: TasksService
    ) { }

    ngOnInit() {
        this.taskForm = new FormGroup({
            title: new FormControl(
                null,
                { validators: [Validators.required] }),
            description: new FormControl(
                null,
                { validators: [Validators.required] }),
        });
    }

    openCreateTaskForm() {
        this.toggleCreateTaskForm = true;
    }

    closeCreateTaskForm() {
        this.toggleCreateTaskForm = false;
        this.taskForm.reset();
    }

    createTask() {
        if (this.taskForm.invalid) {
            return;
        }
        this.tasksService.createTask(
            this.taskForm.value.title,
            this.taskForm.value.description);
        this.taskForm.reset();
        this.closeCreateTaskForm();
        this.tasksService.getTasks();
    }

    enterPressed(event: KeyboardEvent) {
        if (event.key === 'Enter') {
            this.createTask();
        }
    }
}
