import { Component, computed, inject, output } from "@angular/core";
import {
  AlertController,
  IonButton,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
} from "@ionic/angular/standalone";

import { Categories } from "@/app/features/to-do/categories/interfaces/categories.interface";
import { CategoriesCrudService } from "@/app/features/to-do/categories/services/categories-crud.service";
import { CategoriesStore } from "@/app/features/to-do/categories/services/stores/categories.store";

@Component({
  selector: "app-list-categories-on-cards",
  templateUrl: "./list-categories-on-cards.component.html",
  imports: [IonButton, IonIcon, IonItem, IonLabel, IonList],
})
export class ListCategoriesOnCardsComponent {
  private categoriesStore = inject(CategoriesStore);
  private categoriesCrudService = inject(CategoriesCrudService);
  private alertController = inject(AlertController);

  editCategory = output<Categories>();

  categories = computed<Categories[]>(() =>
    this.categoriesStore.getCategories(),
  );

  onClickEditCategorie(category: Categories): void {
    this.editCategory.emit(category);
  }

  async onClickDeleteCategorieById(id: string): Promise<void> {
    const isDeleted: boolean = await this.categoriesCrudService.DeleteById(id);

    if (isDeleted) return;

    const alert = await this.alertController.create({
      header: "No se puede eliminar la categoria",
      message:
        "Esta categoria tiene tareas asociadas. Elimine o reasigne esas tareas antes de eliminarla.",
      buttons: ["Aceptar"],
    });

    await alert.present();
  }
}
