import { Component, inject } from '@angular/core';
import { Producto } from '../producto.model';
import { ProductoService } from '../producto.service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-producto',
  imports: [FormsModule],
  templateUrl: './editar-producto.html',
  styleUrl: './editar-producto.css'
})
export class EditarProducto {
  producto: Producto = new Producto();
  id!: number;

  private productoServicio = inject(ProductoService);
  private ruta = inject(ActivatedRoute);

  ngOnInit() {
    this.id = this.ruta.snapshot.params['id'];
    this.productoServicio.obtenerProductoPorId(this.id).subscribe({
      next: (data) => {
        this.producto = data;
      },
      error: (error: any) => {
        console.error('Error al obtener el producto:', error);
      }
    });
  }



}
