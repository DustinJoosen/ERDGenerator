import { Injectable } from '@angular/core';


export interface Column {
  id: number,
  name: string,
  type: string,
  required: boolean,
}

export interface Table {
  id: number,
  name: string,
  columns: Column[]
}


@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor() { }

  private tables: Table[] = [
    {
      id: 1,
      name: "First Table Xo",
      columns: [
        {
          id: 1,
          name: "Id",
          type: "Number",
          required: true,
        },
        {
          id: 2,
          name: "Title",
          type: "String",
          required: false
        }
      ]
    },
    {
      id: 2,
      name: "Second Table",
      columns: [
        {
          id: 1,
          name: "Id",
          type: "Number",
          required: true
        },
        {
          id: 2,
          name: "FirstName",
          type: "String",
          required: false,
        },
        {
          id: 3,
          name: "LastName",
          type: "String",
          required: false,
        }
      ]
    },
  ];

  public setTables(tables: Table[]) {
    this.tables = tables;
  }

  public getTables(): Table[] {
    return this.tables;
  }
}
