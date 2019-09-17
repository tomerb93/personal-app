import { Component, OnInit, OnDestroy } from '@angular/core';


import { Task } from '../tasks.model';
import { TasksService } from '../tasks.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-tasks-list',
    templateUrl: './tasks-list.component.html',
    styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit, OnDestroy {

    tasks: Task[] = [];
    private tasksSub: Subscription;
    editMode = false;

    constructor(private tasksService: TasksService) { }

    ngOnInit() {
        this.tasksService.getTasks();
        this.tasksSub = this.tasksService.getTasksUpdateListener()
            .subscribe((tasksData: { tasks: Task[] }) => {
                this.tasks = tasksData.tasks;
            });
    }

    editTask(
        taskId: string,
        newValue: string,
        propertyEditted: string,
        taskTitle: string,
        taskDescription: string) {
        if (this.editMode) {
            this.editMode = false;
            this.tasksService.editTask(
                taskId,
                newValue,
                propertyEditted,
                taskTitle,
                taskDescription);
        } else {
            this.editMode = true;
        }
    }

    deleteTask(taskId: string) {
        this.tasksService.deleteTask(taskId);
    }

    ngOnDestroy() {
        this.tasksSub.unsubscribe();
    }
}
