import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TableComponent} from "./dashboard/table/table.component";
import {ConfigurationComponent} from "./configuration/configuration.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TableComponent, ConfigurationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ERD Generator';
}
