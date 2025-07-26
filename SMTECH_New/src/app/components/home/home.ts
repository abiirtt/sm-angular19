import { Component } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';

interface Car {
  make: string;
  model: string;
  price: number;
}

@Component({
  selector: 'app-home',
  imports: [AgGridModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  columnDefs: ColDef<Car>[] = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price' }
  ];

  rowData: Car[] = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 }
  ];

}
