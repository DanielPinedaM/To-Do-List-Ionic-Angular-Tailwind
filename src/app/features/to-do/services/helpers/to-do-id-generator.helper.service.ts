import { Injectable, inject } from "@angular/core";
import { Categories } from "@/app/features/to-do/categories/interfaces/categories.interface";
import { CategoriesStore } from "@/app/features/to-do/categories/services/stores/categories.store";
import { Task } from "@/app/features/to-do/tasks/interfaces/tasks.interface";
import { TasksStore } from "@/app/features/to-do/tasks/services/stores/tasks.store";

@Injectable({ providedIn: "root" })
export class ToDoIdGeneratorHelperService {
  private tasksStore = inject(TasksStore);
  private categoriesStore = inject(CategoriesStore);

  generateNextTasktId(): string {
    const allTasks: Task[] = this.tasksStore.getTasks();
    const tasksIds: number[] = allTasks.map((task) => Number(task.id));

    if (allTasks.length === 0) return "1";

    return String(Math.max(...tasksIds) + 1);
  }

  generateNextCategoryId(): string {
    const allCategories: Categories[] = this.categoriesStore.getCategories();
    const categoriesIds: number[] = allCategories.map((category) =>
      Number(category.id),
    );

    if (allCategories.length === 0) return "1";

    return String(Math.max(...categoriesIds) + 1);
  }
}
