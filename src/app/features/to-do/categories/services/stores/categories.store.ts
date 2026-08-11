import { Injectable, signal } from "@angular/core";
import { Categories } from "@/app/features/to-do/categories/interfaces/categories.interface";

@Injectable({ providedIn: "root" })
export class CategoriesStore {
  private categories = signal<Categories[]>([]);

  setCategories(categories: Categories[]): void {
    this.categories.set(categories);
  }

  getCategories = (): Categories[] => this.categories();
}
