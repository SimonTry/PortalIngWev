import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { Pedido } from 'src/app/models/pedido.model';
import { PedidoService } from 'src/app/services/pedido/pedido.service';

@Component({
  selector: 'app-pedido-list',
  imports: [MaterialModule, CommonModule],
  templateUrl: './pedido-list.component.html',
  styleUrl: './pedido-list.component.scss'
})
export class PedidoListComponent {
    pedidoList: Pedido[];

    constructor(private router: Router, private pedidoService: PedidoService){}

    ngOnInit(){
      this.getPedidos()
    }

    goToAddPedido(){
      this.router.navigate(['/pedidos/formulario'])
    }

    editarPedido(pedido: Pedido){

    }

    eliminarPedido(pedido: Pedido){

    }

    getPedidos(){
      this.pedidoService.listarPedido().subscribe({
        next:(res) =>{
          this.pedidoList = res;
        },
        error:(err)=>{
          if(err.status === 403){
            localStorage.removeItem('AuthToken');
            this.router.navigate(['/authentication/login'])
          }
        }
      })
    }
}
