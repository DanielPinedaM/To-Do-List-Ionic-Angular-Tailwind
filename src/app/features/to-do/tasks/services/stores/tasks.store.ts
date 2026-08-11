import { Injectable, signal } from "@angular/core";
import { Task } from "@/app/features/to-do/tasks/interfaces/tasks.interface";

@Injectable({ providedIn: "root" })
export class TasksStore {
  private tasks = signal<Task[]>([]);

  setTasks(tasks: Task[]): void {
    this.tasks.set(tasks);
  }

  getTasks = (): Task[] => this.tasks();
}
