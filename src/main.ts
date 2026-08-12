import { bootstrapApplication } from "@angular/platform-browser";
import {
  RouteReuseStrategy,
  provideRouter,
  withPreloading,
  PreloadAllModules,
} from "@angular/router";
import {
  IonicRouteStrategy,
  provideIonicAngular,
} from "@ionic/angular/standalone";
import { provideAppInitializer, inject } from "@angular/core";
import { routes } from "@/app/app.routes";
import { AppComponent } from "@/app/app.component";
import { RemoteConfigService } from "@/app/config/firebase/remote-config.service";

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideAppInitializer(() => {
      // inicializar firebase al arrancar la app
      const remoteConfigService = inject(RemoteConfigService);
      return remoteConfigService.init();
    }),
  ],
});
