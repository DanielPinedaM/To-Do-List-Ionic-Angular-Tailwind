import { Injectable, inject } from "@angular/core";
import { CapacitorPreferencesHelperService } from "@/app/features/to-do/services/helpers/capacitor-preferences.helper.service";
import { ToDoIdGeneratorHelperService } from "@/app/features/to-do/services/helpers/to-do-id-generator.helper.service";
import { Task } from "@/app/features/to-do/tasks/interfaces/tasks.interface";
import { TasksStore } from "@/app/features/to-do/tasks/services/stores/tasks.store";

@Injectable({ providedIn: "root" })
export class TaskCrudService {
  private tasksStore = inject(TasksStore);
  private preferencesHelper = inject(CapacitorPreferencesHelperService);
  private idGeneratorHelper = inject(ToDoIdGeneratorHelperService);

  async CreateTask(task: Omit<Task, "id">): Promise<void> {
    const newTask: Task = {
      ...task,
      id: this.idGeneratorHelper.generateNextTasktId(),
    };

    const tasksWithNewTask: Task[] = this.tasksStore.getTasks().concat(newTask);

    this.tasksStore.setTasks(tasksWithNewTask);
    await this.preferencesHelper.saveToPreferences("tasks", tasksWithNewTask);
  }

  async UpdateTask(
    id: string,
    changes: Partial<Omit<Task, "id">>,
  ): Promise<void> {
    const allTasks: Task[] = this.tasksStore
      .getTasks()
      .map((task) => (task.id === id ? { ...task, ...changes } : task));

    this.tasksStore.setTasks(allTasks);
    await this.preferencesHelper.saveToPreferences("tasks", allTasks);
  }

  async DeleteById(id: string): Promise<void> {
    const tasksWithoutDeletedTask: Task[] = this.tasksStore
      .getTasks()
      .filter((task) => task.id !== id);

    this.tasksStore.setTasks(tasksWithoutDeletedTask);
    await this.preferencesHelper.saveToPreferences(
      "tasks",
      tasksWithoutDeletedTask,
    );
  }
}
