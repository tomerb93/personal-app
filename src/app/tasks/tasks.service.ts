import { Injectable } from '@angular/core';
import { Task } from './tasks.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

const BACKEND_URL = environment.apiUrl + '/tasks/';

@Injectable({
    providedIn: 'root'
})
export class TasksService {

    private tasks: Task[] = [];
    private tasksUpdated = new Subject<{ tasks: Task[] }>();

    constructor(
        private http: HttpClient
    ) { }

    createTask(title: string, description: string) {
        const task: Task = { id: null, title, description, dateCreated: new Date() };
        this.http
            .post<{ message: string, task: Task }>(BACKEND_URL, task)
            .subscribe((message) => {
                console.log(message);
                this.getTasks();
            });

    }

    getTasksUpdateListener() {
        return this.tasksUpdated.asObservable();
    }

    getTasks() {
        this.http
            .get<{ tasks: any }>(BACKEND_URL)
            .pipe(
                map(tasksData => {
                    return {
                        tasks: tasksData.tasks.map(task => {
                            return {
                                title: task.title,
                                description: task.description,
                                dateCreated: task.dateCreated,
                                id: task._id
                            };
                        })
                    };
                })
            )
            .subscribe((transformedTasksData) => {
                this.tasks = transformedTasksData.tasks;
                this.tasksUpdated.next({
                    tasks: [...this.tasks]
                });
            });
    }

    editTask(
        taskId: string,
        newValue: string,
        propertyEditted: string,
        taskTitle: string,
        taskDescription: string) {
        if (propertyEditted === 'description') {
            const edittedTask = {
                title: taskTitle,
                description: newValue,
                dateCreated: new Date()
            };
            this.http.put<{ message: string }>(BACKEND_URL + taskId, edittedTask)
                .subscribe((message) => {
                    console.log(message);
                    this.getTasks();
                });
        } else {
            const edittedTask = {
                title: newValue,
                description: taskDescription,
                dateCreated: new Date()
            };
            this.http.put(BACKEND_URL + taskId, edittedTask);
        }
    }

    deleteTask(taskId: string) {
        this.http
            .delete(BACKEND_URL + taskId)
            .subscribe(() => {
                this.getTasks();
            });
    }
}


