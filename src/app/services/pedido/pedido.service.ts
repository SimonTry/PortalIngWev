import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pedido } from 'src/app/models/pedido.model';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  
  private apiUrl = 'http://localhost:3000/api/pedidos'

  constructor(private http: HttpClient) { }

  listarPedido(){
    const token = localStorage.getItem('AuthToken');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    return this.http.get<Pedido[]>(this.apiUrl,{headers})
  }

  agregarPedido(pedido: Pedido){
    const token = localStorage.getItem('AuthToken');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    return this.http.post(this.apiUrl, pedido, { headers})
  }
}
