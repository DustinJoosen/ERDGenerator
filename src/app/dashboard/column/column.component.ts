import {Component, Input} from '@angular/core';
import {Column, TableService} from "../../table.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-column',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './column.component.html',
  styleUrl: './column.component.css'
})
export class ColumnComponent {
  @Input()
  public column?: Column;
}
