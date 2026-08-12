import { Injectable, signal } from "@angular/core";
import {
  getRemoteConfig,
  fetchAndActivate,
  getValue,
} from "firebase/remote-config";
import { firebaseApp } from "@/app/config/firebase/firebase.config";

@Injectable({ providedIn: "root" })
export class RemoteConfigService {
  private remoteConfig = getRemoteConfig(firebaseApp);
  showDeleteCategoryById = signal<Boolean>(false);

  constructor() {
    /* intencionalmente escribi 0 para probar */
    this.remoteConfig.settings.minimumFetchIntervalMillis = 0;

    this.remoteConfig.defaultConfig = { show_delete_category_by_id: false };
  }

  async init(): Promise<void> {
    await fetchAndActivate(this.remoteConfig);

    this.showDeleteCategoryById.set(
      getValue(this.remoteConfig, "show_delete_category_by_id").asBoolean(),
    );
  }
}
