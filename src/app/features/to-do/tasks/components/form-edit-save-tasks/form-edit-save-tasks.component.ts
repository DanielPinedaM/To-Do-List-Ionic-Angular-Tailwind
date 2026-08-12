import {
  Component,
  computed,
  effect,
  inject,
  input,
  output,
  signal,
} from "@angular/core";
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
import { Task } from "@/app/features/to-do/tasks/interfaces/tasks.interface";
import { TaskCrudService } from "@/app/features/to-do/tasks/services/task-crud.service";

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
  private taskCrudService = inject(TaskCrudService);

  taskToEdit = input<Task | null>(null);

  taskSaved = output<void>();

  categories = computed<Categories[]>(() =>
    this.categoriesStore.getCategories(),
  );

  hasCategories = computed<boolean>(() => this.categories().length > 0);

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

  constructor() {
    effect(() => {
      const task: Task | null = this.taskToEdit();

      if (!task) {
        this.resetForm();
        return;
      }

      this.submitted.set(false);
      this.taskForm.setValue({
        description: task.description,
        completed: task.completed,
        category: task.category,
      });
    });
  }

  async onSubmitSaveTask(): Promise<void> {
    this.submitted.set(true);

    if (!this.hasCategories()) return;
    if (this.taskForm.invalid) return;

    const { description, completed, category } = this.taskForm.getRawValue();
    const task: Task | null = this.taskToEdit();

    if (task) {
      await this.taskCrudService.UpdateTask(task.id, {
        description: description.trim(),
        completed,
        category,
      });
      this.resetForm();
      this.taskSaved.emit();
      return;
    }

    await this.taskCrudService.CreateTask({
      description: description.trim(),
      completed,
      category,
    });
    this.resetForm();
    this.taskSaved.emit();
  }

  private resetForm(): void {
    this.submitted.set(false);
    this.taskForm.reset({ description: "", completed: false, category: "" });
  }
}
