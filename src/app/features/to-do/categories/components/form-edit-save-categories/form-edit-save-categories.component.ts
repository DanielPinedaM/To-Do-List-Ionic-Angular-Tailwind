import {
  Component,
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
} from "@ionic/angular/standalone";
import { Categories } from "@/app/features/to-do/categories/interfaces/categories.interface";
import { CategoriesCrudService } from "@/app/features/to-do/categories/services/categories-crud.service";

const MIN_DESCRIPTION_LENGTH = 3;

@Component({
  selector: "app-form-edit-save-categories",
  templateUrl: "./form-edit-save-categories.component.html",
  imports: [ReactiveFormsModule, IonButton, IonInput, IonItem, IonList],
})
export class FormEditSaveCategoriesComponent {
  private formBuilder = inject(FormBuilder);
  private categoriesCrudService = inject(CategoriesCrudService);

  categoryToEdit = input<Categories | null>(null);

  categorySaved = output<void>();

  categoryForm = this.formBuilder.nonNullable.group({
    description: [
      "",
      [Validators.required, Validators.minLength(MIN_DESCRIPTION_LENGTH)],
    ],
  });

  descriptionControl = this.categoryForm.controls.description;

  submitted = signal<boolean>(false);

  minDescriptionLength = MIN_DESCRIPTION_LENGTH;

  constructor() {
    effect(() => {
      const category: Categories | null = this.categoryToEdit();

      if (!category) {
        this.resetForm();
        return;
      }

      this.submitted.set(false);
      this.categoryForm.setValue({ description: category.description });
    });
  }

  async onSubmitSaveCategory(): Promise<void> {
    this.submitted.set(true);

    if (this.categoryForm.invalid) return;

    const description: string = this.descriptionControl.value.trim();
    const category: Categories | null = this.categoryToEdit();

    if (category) {
      await this.categoriesCrudService.UpdateCategory(category.id, description);
      this.resetForm();
      this.categorySaved.emit();
      return;
    }

    await this.categoriesCrudService.CreateCategory(description);
    this.resetForm();
    this.categorySaved.emit();
  }

  private resetForm(): void {
    this.submitted.set(false);
    this.categoryForm.reset({ description: "" });
  }
}
