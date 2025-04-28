import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { Router } from '@angular/router';
import { Pedido } from 'src/app/models/pedido.model';
import { ProductoFormComponent } from 'src/app/pages/productos/producto-form/producto-form/producto-form.component';
import { ProductoListComponent } from 'src/app/pages/productos/producto-list/producto-list/producto-list.component';
import { PedidoService } from 'src/app/services/pedido/pedido.service';

@Component({
  selector: 'app-pedido-form',
  imports: [ProductoListComponent, ProductoFormComponent, MaterialModule, FormsModule, ReactiveFormsModule],
  templateUrl: './pedido-form.component.html',
  styleUrl: './pedido-form.component.scss'
})
export class PedidoFormComponent {

  constructor(private router: Router, private pedidoService: PedidoService){}

  formularioPedido = new FormGroup({
    cliente: new FormControl('', Validators.required)
  })

  guardarPedido(){
    //Debemos validar que si incluyan productos al carrito
    if(this.formularioPedido.invalid){
      const pedido: Pedido = {
        cliente: this.formularioPedido.value.cliente!
      }

      this.pedidoService.agregarPedido(pedido).subscribe({
        next:(res)=>{
          alert(`Se ha registrado el pedido con id`)
        },error: (err)=>{

        }
      })
    }
  }
}
