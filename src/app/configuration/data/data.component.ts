import {Component, OnInit} from '@angular/core';
import {Table, TableService} from "../../table.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-data',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './data.component.html',
  styleUrl: './data.component.css'
})
export class DataComponent implements OnInit {
  public data?: string;
  public error?: string;

  constructor(private tableService: TableService) {}

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    let json = JSON.parse(JSON.stringify(this.tableService.getTables()));
    this.data = JSON.stringify(json, null, 2);
  }

  updateData() {
    this.error = "";

    try {
      let tables: Table[] = JSON.parse(this.data ?? "");
      this.tableService.setTables(tables);
      this.refresh();
    }
    catch (ex) {
      this.error = "JSON is not valid";
    }
  }
}
