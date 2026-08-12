import { Component, OnInit } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { createOutline, trashOutline } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.registerIcons();
  }

  private registerIcons(): void {
    addIcons({ 'create-outline': createOutline, 'trash-outline': trashOutline });
  }
}
