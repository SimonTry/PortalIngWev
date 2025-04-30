import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { ProductoPedido } from 'src/app/models/producto-pedido.model';
import { Producto } from 'src/app/models/producto.model';
import { ProductoService } from 'src/app/services/producto/producto.service';

@Component({
  selector: 'app-producto-form',
  imports: [FormsModule, ReactiveFormsModule, MaterialModule, CommonModule],
  templateUrl: './producto-form.component.html',
  styleUrl: './producto-form.component.scss'
})
export class ProductoFormComponent {
  productosDisponibles: Producto[]=[];

  @Output() productoAgregado = new EventEmitter<ProductoPedido>();

  constructor(private prodcutoService: ProductoService){}

  form = new FormGroup({
    id: new FormControl('', Validators.required),
    cantidad: new FormControl(1, [Validators.required, Validators.min(1)])
  })

  ngOnInit(){
    this.getProductos();
  }
  agregarProducto(){
    if(this.form.valid){
      const productId = this.form.value.id;
      const ProductoSeleccionado = this.productosDisponibles.find(p => p.id === productId);
      if(ProductoSeleccionado){
        const productoPedido: ProductoPedido = {
          id: ProductoSeleccionado.id || '',
          nombre: ProductoSeleccionado.nombre,
          precio: ProductoSeleccionado.precio,
          subtotal: ProductoSeleccionado.precio * (this.form.value.cantidad || 0),
          cantidad: this.form.value.cantidad || 0
        }
        this.productoAgregado.emit(productoPedido);
        this.form.reset({cantidad:1});
      }

    }
  }

  getProductos(){
    this.prodcutoService.getProductos().subscribe({
      next:(productos)=>{
        this.productosDisponibles = productos;
      },error: (err) =>{
        alert("Sorry: but not sorry:"+ err.error.error)
      }
    })
  }
}
