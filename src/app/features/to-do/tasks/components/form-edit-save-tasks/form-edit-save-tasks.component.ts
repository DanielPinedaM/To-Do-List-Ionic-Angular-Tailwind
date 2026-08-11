import { Component, computed, inject, signal } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import {
  IonButton,
  IonInput,
  IonItem,
  IonList,
  IonSelect,
  IonSelectOption,
  IonToggle,
} from "@ionic/angular/standalone";
import { Categories } from "@/app/features/to-do/categories/interfaces/categories.interface";
import { CategoriesStore } from "@/app/features/to-do/categories/services/stores/categories.store";

const MIN_DESCRIPTION_LENGTH = 3;

@Component({
  selector: "app-form-edit-save-tasks",
  templateUrl: "./form-edit-save-tasks.component.html",
  imports: [
    ReactiveFormsModule,
    IonButton,
    IonInput,
    IonItem,
    IonList,
    IonSelect,
    IonSelectOption,
    IonToggle,
  ],
})
export class FormEditSaveTasksComponent {
  private formBuilder = inject(FormBuilder);
  private categoriesStore = inject(CategoriesStore);

  categories = computed<Categories[]>(() =>
    this.categoriesStore.getCategories(),
  );

  taskForm = this.formBuilder.nonNullable.group({
    description: [
      "",
      [Validators.required, Validators.minLength(MIN_DESCRIPTION_LENGTH)],
    ],
    completed: [false],
    category: ["", [Validators.required]],
  });

  descriptionControl = this.taskForm.controls.description;
  categoryControl = this.taskForm.controls.category;

  submitted = signal<boolean>(false);

  minDescriptionLength = MIN_DESCRIPTION_LENGTH;

  onSubmitSaveTask() {}
}
