import { Component, OnInit, computed, inject, signal } from "@angular/core";
import {
  IonContent,
  IonFooter,
  IonHeader,
  IonImg,
  IonToolbar,
} from "@ionic/angular/standalone";

import { FormEditSaveCategoriesComponent } from "@/app/features/to-do/categories/components/form-edit-save-categories/form-edit-save-categories.component";
import { ListCategoriesOnCardsComponent } from "@/app/features/to-do/categories/components/list-categories-on-cards/list-categories-on-cards.component";
import { Categories } from "@/app/features/to-do/categories/interfaces/categories.interface";
import { CategoriesStore } from "@/app/features/to-do/categories/services/stores/categories.store";
import { CapacitorPreferencesHelperService } from "@/app/features/to-do/services/helpers/capacitor-preferences.helper.service";
import { FormEditSaveTasksComponent } from "@/app/features/to-do/tasks/components/form-edit-save-tasks/form-edit-save-tasks.component";
import { ListTasksOnCardsComponent } from "@/app/features/to-do/tasks/components/list-tasks-on-cards/list-tasks-on-cards.component";
import { TasksSearchComponent } from "@/app/features/to-do/tasks/components/tasks-search/tasks-search.component";
import { Task } from "@/app/features/to-do/tasks/interfaces/tasks.interface";
import { TasksStore } from "@/app/features/to-do/tasks/services/stores/tasks.store";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  imports: [
    FormEditSaveCategoriesComponent,
    ListCategoriesOnCardsComponent,
    FormEditSaveTasksComponent,
    ListTasksOnCardsComponent,
    TasksSearchComponent,
    IonContent,
    IonFooter,
    IonHeader,
    IonImg,
    IonToolbar,
  ],
})
export class MainComponent implements OnInit {
  private tasksStore = inject(TasksStore);
  private categoriesStore = inject(CategoriesStore);
  private preferencesHelper = inject(CapacitorPreferencesHelperService);

  categoryToEdit = signal<Categories | null>(null);

  taskToEdit = signal<Task | null>(null);

  selectedCategoriesIds = signal<string[]>([]);

  filteredTasks = computed<Task[]>(() => {
    const allTasks: Task[] = this.tasksStore.getTasks();
    const categoriesIds: string[] = this.selectedCategoriesIds();

    if (categoriesIds.length === 0) return allTasks;

    return allTasks.filter((task) => categoriesIds.includes(task.category));
  });

  hasTasks = computed<boolean>(() => this.tasksStore.getTasks().length > 0);

  async ngOnInit(): Promise<void> {
    await this.hydrateStores();
  }

  private async hydrateStores(): Promise<void> {
    const [tasks, categories] = await this.getPreferences();

    this.tasksStore.setTasks(tasks);
    this.categoriesStore.setCategories(categories);
  }

  private getPreferences = (): Promise<[Task[], Categories[]]> =>
    Promise.all([
      this.preferencesHelper.getToTasksPreferences(),
      this.preferencesHelper.getToCategoriesPreferences(),
    ]);

  onEditCategory(category: Categories): void {
    this.categoryToEdit.set(category);
  }

  onCategorySaved(): void {
    this.categoryToEdit.set(null);
  }

  onEditTask(task: Task): void {
    this.taskToEdit.set(task);
  }

  onTaskSaved(): void {
    this.taskToEdit.set(null);
  }

  onCategoriesIdsFilterChange(categoriesIds: string[]): void {
    this.selectedCategoriesIds.set(categoriesIds);
  }
}
