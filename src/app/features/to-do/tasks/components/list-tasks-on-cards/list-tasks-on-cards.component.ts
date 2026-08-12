import {
  Component,
  computed,
  inject,
  input,
  output,
  signal,
} from "@angular/core";
import {
  InfiniteScrollCustomEvent,
  IonButton,
  IonIcon,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonItem,
  IonLabel,
  IonList,
  IonToggle,
} from "@ionic/angular/standalone";

import { Categories } from "@/app/features/to-do/categories/interfaces/categories.interface";
import { CategoriesStore } from "@/app/features/to-do/categories/services/stores/categories.store";
import { Task } from "@/app/features/to-do/tasks/interfaces/tasks.interface";
import { TasksStore } from "@/app/features/to-do/tasks/services/stores/tasks.store";
import { TaskCrudService } from "@/app/features/to-do/tasks/services/task-crud.service";

const TASKS_PER_PAGE = 3;

const LOADING_SIMULATION_MS = 2500;

@Component({
  selector: "app-list-tasks-on-cards",
  templateUrl: "./list-tasks-on-cards.component.html",
  imports: [
    IonButton,
    IonIcon,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    IonItem,
    IonLabel,
    IonList,
    IonToggle,
  ],
})
export class ListTasksOnCardsComponent {
  private categoriesStore = inject(CategoriesStore);
  private tasksStore = inject(TasksStore);
  private taskCrudService = inject(TaskCrudService);

  filteredTasks = input.required<Task[]>();

  selectedCategoriesIds = input<string[]>([]);

  editTask = output<Task>();

  private visibleTasksCount = signal(TASKS_PER_PAGE);

  visibleTasks = computed<Task[]>(() =>
    this.filteredTasks().slice(0, this.visibleTasksCount()),
  );

  isInfiniteScrollDisabled = computed<boolean>(
    () => this.visibleTasks().length >= this.filteredTasks().length,
  );

  hasNoTasksForSelectedCategories = computed<boolean>(
    () =>
      this.filteredTasks().length === 0 &&
      this.selectedCategoriesIds().length > 0 &&
      this.tasksStore.getTasks().length > 0,
  );

  noTasksForSelectedCategoriesMessage = computed<string>(() => {
    const descriptions: string[] = this.selectedCategoriesIds().map(
      (categoryId) => this.categoryDescription(categoryId),
    );

    const label: string =
      descriptions.length === 1 ? "la categoria" : "las categorias";

    return `No hay tareas para ${label} ${descriptions.join(", ")}`;
  });

  constructor() {}

  onIonInfinite(event: InfiniteScrollCustomEvent): void {
    setTimeout(() => {
      this.visibleTasksCount.update(
        (visibleTasksCount) => visibleTasksCount + TASKS_PER_PAGE,
      );
      event.target.complete();
    }, LOADING_SIMULATION_MS);
  }

  onClickEditTask(task: Task): void {
    this.editTask.emit(task);
  }

  async onClickDeleteTaskById(id: string): Promise<void> {
    await this.taskCrudService.DeleteById(id);
  }

  async onToggleCompleted(id: string, completed: boolean): Promise<void> {
    await this.taskCrudService.UpdateTask(id, { completed });
  }

  categoryDescription(categoryId: string): string {
    const category: Categories | undefined = this.categoriesStore
      .getCategories()
      .find((currentCategory) => currentCategory.id === categoryId);

    return category?.description ?? "Sin categoria";
  }
}
