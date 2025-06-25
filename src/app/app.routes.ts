import { Routes } from '@angular/router';
import { ProductoLista } from './producto-lista/producto-lista';

export const routes: Routes = [
    { path: 'productos', component: ProductoLista }, //redefinimos la ruta de nuestra app
    { path: '', redirectTo: 'productos', pathMatch: 'full' }, //redireccionamos a productos si no se especifica una ruta
];
