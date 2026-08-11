import { Injectable, inject } from "@angular/core";
import { Categories } from "@/app/features/to-do/categories/interfaces/categories.interface";
import { CategoriesStore } from "@/app/features/to-do/categories/services/stores/categories.store";
import { CapacitorPreferencesHelperService } from "@/app/features/to-do/services/helpers/capacitor-preferences.helper.service";
import { ToDoIdGeneratorHelperService } from "@/app/features/to-do/services/helpers/to-do-id-generator.helper.service";
import { TasksStore } from "@/app/features/to-do/tasks/services/stores/tasks.store";

@Injectable({ providedIn: "root" })
export class CategoriesCrudService {
  private categoriesStore = inject(CategoriesStore);
  private tasksStore = inject(TasksStore);
  private preferencesHelper = inject(CapacitorPreferencesHelperService);
  private idGeneratorHelper = inject(ToDoIdGeneratorHelperService);

  async CreateCategory(description: string): Promise<void> {
    const newCategory: Categories = {
      id: this.idGeneratorHelper.generateNextCategoryId(),
      description,
    };

    const categoriesWithNewCategory: Categories[] = this.categoriesStore
      .getCategories()
      .concat(newCategory);

    this.categoriesStore.setCategories(categoriesWithNewCategory);
    await this.preferencesHelper.saveToPreferences(
      "categories",
      categoriesWithNewCategory,
    );
  }

  async UpdateCategory(id: string, description: string): Promise<void> {
    const allCategories: Categories[] = this.categoriesStore
      .getCategories()
      .map((category) =>
        category.id === id ? { ...category, description } : category,
      );

    this.categoriesStore.setCategories(allCategories);
    await this.preferencesHelper.saveToPreferences("categories", allCategories);
  }

  async DeleteById(id: string): Promise<boolean> {
    const hasTasks: boolean = this.tasksStore
      .getTasks()
      .some((task) => task.category === id);

    if (hasTasks) return false;

    const categoriesWithoutDeletedCategory: Categories[] = this.categoriesStore
      .getCategories()
      .filter((category) => category.id !== id);

    this.categoriesStore.setCategories(categoriesWithoutDeletedCategory);
    await this.preferencesHelper.saveToPreferences(
      "categories",
      categoriesWithoutDeletedCategory,
    );

    return true;
  }
}
