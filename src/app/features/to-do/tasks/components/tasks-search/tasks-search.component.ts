import { Component, computed, effect, inject, output } from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { FormBuilder, ReactiveFormsModule } from "@angular/forms";
import {
  IonItem,
  IonList,
  IonSelect,
  IonSelectOption,
} from "@ionic/angular/standalone";

import { Categories } from "@/app/features/to-do/categories/interfaces/categories.interface";
import { CategoriesStore } from "@/app/features/to-do/categories/services/stores/categories.store";

@Component({
  selector: "app-tasks-search",
  templateUrl: "./tasks-search.component.html",
  imports: [ReactiveFormsModule, IonItem, IonList, IonSelect, IonSelectOption],
})
export class TasksSearchComponent {
  private formBuilder = inject(FormBuilder);
  private categoriesStore = inject(CategoriesStore);

  categoriesIdsFilterChange = output<string[]>();

  categories = computed<Categories[]>(() =>
    this.categoriesStore.getCategories(),
  );

  searchForm = this.formBuilder.nonNullable.group({
    categoriesIds: this.formBuilder.nonNullable.control<string[]>([]),
  });

  constructor() {
    this.searchForm.controls.categoriesIds.valueChanges
      .pipe(takeUntilDestroyed())
      .subscribe((categoriesIds) =>
        this.categoriesIdsFilterChange.emit(categoriesIds),
      );

    effect(() => {
      const availableIds: string[] = this.categories().map(
        (category) => category.id,
      );
      const selectedIds: string[] =
        this.searchForm.controls.categoriesIds.value;
      const validIds: string[] = selectedIds.filter((id) =>
        availableIds.includes(id),
      );

      if (validIds.length === selectedIds.length) return;

      this.searchForm.controls.categoriesIds.setValue(validIds);
    });
  }
}
