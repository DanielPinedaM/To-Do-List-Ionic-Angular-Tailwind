import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "to-do-list",
    loadComponent: () =>
      import("@/app/features/to-do/main/main.component").then(
        (m) => m.MainComponent,
      ),
  },
  {
    path: "",
    redirectTo: "to-do-list",
    pathMatch: "full",
  },
  {
    path: "**",
    redirectTo: "to-do-list",
  },
];
