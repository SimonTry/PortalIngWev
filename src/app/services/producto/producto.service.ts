import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private urlApi = 'http://localhost:3000/api/productos'
  
  constructor(private http: HttpClient) { }

  getProductos(){
    return this.http.get<Producto[]>(this.urlApi);
  }
}
