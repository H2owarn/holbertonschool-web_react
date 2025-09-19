/// <reference path="./crud.d.ts" />
import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

// 1. Create an object called `row` with type RowElement
const row: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva',
};

// 2. Create a const variable `newRowID` with type RowID and assign the result of insertRow
const newRowID: RowID = CRUD.insertRow(row);

// 3. Create a const variable `updatedRow` with type RowElement and add an age field
const updatedRow: RowElement = {
    ...row,
    age: 23,
};

// 4. Call updateRow and deleteRow
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);

