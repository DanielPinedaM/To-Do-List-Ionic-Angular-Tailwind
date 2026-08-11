export interface Task {
  id: string;          // ID unico autoincrementable
  description: string; // descripcion de la tarea, dato de entrada de ion-input en form-edit-save-tasks
  completed: boolean;  // marcar tareas como completa o incompleta, dato de entrada de ion-toggle en form-edit-save-tasks y list-tasks-on-cards
  category: string;    // categoria dinamica de la tarea, dato de entrada de ion-select en form-edit-save-tasks y ion-input en form-edit-save-categories
}
