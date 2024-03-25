import { Component } from '@angular/core';
import {DataComponent} from "./data/data.component";
import {RelationsComponent} from "./relations/relations.component";
import {MatTabsModule} from "@angular/material/tabs";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-configuration',
  standalone: true,
  imports: [
    CommonModule,
    DataComponent,
    RelationsComponent,
  ],
  templateUrl: './configuration.component.html',
  styleUrl: './configuration.component.css'
})
export class ConfigurationComponent {
  public panelOpen: boolean = false;

  public selected?: any = DataComponent;

  togglePanel(): void {
    this.panelOpen = !this.panelOpen;
  }

  setScreen(screen: Number) {
    switch (screen) {
      case 0:
        this.selected = DataComponent;
        break
      case 1:
        this.selected = RelationsComponent;
        break;
    }
  }
}
