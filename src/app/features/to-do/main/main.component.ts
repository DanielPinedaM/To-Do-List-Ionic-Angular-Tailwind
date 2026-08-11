import { Component } from "@angular/core";
import {
  IonContent,
  IonFooter,
  IonHeader,
  IonImg,
  IonToolbar,
} from "@ionic/angular/standalone";
import { FormEditSaveCategoriesComponent } from "@/app/features/to-do/categories/components/form-edit-save-categories/form-edit-save-categories.component";
import { ListCategoriesOnCardsComponent } from "@/app/features/to-do/categories/components/list-categories-on-cards/list-categories-on-cards.component";
import { FormEditSaveTasksComponent } from "@/app/features/to-do/tasks/components/form-edit-save-tasks/form-edit-save-tasks.component";
import { ListTasksOnCardsComponent } from "@/app/features/to-do/tasks/components/list-tasks-on-cards/list-tasks-on-cards.component";
import { TasksSearchComponent } from "@/app/features/to-do/tasks/components/tasks-search/tasks-search.component";

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
export class MainComponent {}
