import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';

  data = {
    cols: [
      { id: 'col1', name: 'Producto' },
      { id: 'col2', name: 'Cantidad' },
    ],
    rows: [
      { col1: 'Patatas', col2: '3' },
      { col1: 'Pimientos', col2: '2' },
      { col1: 'Tomates', col2: '6' },
    ],
  };

  add(event) {
    this.data.rows.push({ col1: 'Nuevo alimento', col2: '0' });
  }

  mod(event) {
    const index = this.data.rows.findIndex((row) => event.col1 === row.col1);
    this.data.rows[index] = event;
  }

  del(event) {
    const index = this.data.rows.findIndex((row) => event.col1 === row.col1);
    console.log(event);
    console.log(this.data.rows[index]);
    this.data.rows.splice(index, 1);
    console.log(this.data.rows);
  }
}
