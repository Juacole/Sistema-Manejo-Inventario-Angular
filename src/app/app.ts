import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductoLista } from "./producto-lista/producto-lista";

@Component({
  selector: 'app-root',
  imports: [ProductoLista],
  templateUrl: './app.html', 
  styleUrl: './app.css'
})
export class App {
  protected title = 'inventario-app';
}
