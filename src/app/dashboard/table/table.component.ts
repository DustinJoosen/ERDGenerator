import {Component, OnInit} from '@angular/core';
import {NgFor, NgIf} from "@angular/common";
import {Table, TableService} from "../../table.service";
import {ColumnComponent} from "../column/column.component";
import {ColumnHeaderComponent} from "../column-header/column-header.component";
import { DragDropModule } from '@angular/cdk/drag-drop';
import {interval, Subscription} from "rxjs";

@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [
    ColumnComponent,
    NgIf,
    NgFor,
    ColumnHeaderComponent,
    DragDropModule
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit {
  public tables?: Table[];
  private subscription?: Subscription;

  constructor(private tableService: TableService) {
  }

  ngOnInit() {
    this.refresh();
    this.subscription = interval(250).subscribe(() => {
      this.refresh();
    });
  }

  refresh() {
    if (!this.tableService)
      return;

    this.tables = this.tableService.getTables();
    console.log(JSON.stringify(this.tables));
  }
}
