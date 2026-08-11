import { Component, inject, signal } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import {
  IonButton,
  IonInput,
  IonItem,
  IonList,
} from "@ionic/angular/standalone";

const MIN_DESCRIPTION_LENGTH = 3;

@Component({
  selector: "app-form-edit-save-categories",
  templateUrl: "./form-edit-save-categories.component.html",
  imports: [ReactiveFormsModule, IonButton, IonInput, IonItem, IonList],
})
export class FormEditSaveCategoriesComponent {
  private formBuilder = inject(FormBuilder);

  categoryForm = this.formBuilder.nonNullable.group({
    description: [
      "",
      [Validators.required, Validators.minLength(MIN_DESCRIPTION_LENGTH)],
    ],
  });

  descriptionControl = this.categoryForm.controls.description;

  submitted = signal(false);

  minDescriptionLength = MIN_DESCRIPTION_LENGTH;

  onSubmitSaveCategory(): void {}
}
