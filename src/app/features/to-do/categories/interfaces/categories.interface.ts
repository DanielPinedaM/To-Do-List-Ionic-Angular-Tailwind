export interface Categories {
  id: string;          // es el value del ion-select-option en componente form-edit-save-tasks y es generado por el metodo generateNextCategoryId
  description: string; // texto que se muestra al usuario final, dato de entrada de ion-input de componente form-edit-save-categories
}
