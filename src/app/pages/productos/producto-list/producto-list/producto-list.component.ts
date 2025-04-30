import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';
import { ProductoPedido } from 'src/app/models/producto-pedido.model';

@Component({
  selector: 'app-producto-list',
  imports: [MaterialModule, CommonModule],
  templateUrl: './producto-list.component.html',
  styleUrl: './producto-list.component.scss'
})
export class ProductoListComponent {
  @Input() productos: ProductoPedido[]=[];


  eliminarProducto(producto:ProductoPedido){

  }
}
