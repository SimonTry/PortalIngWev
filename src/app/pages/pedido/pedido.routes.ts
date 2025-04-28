import { Routes } from '@angular/router';

import { PedidoFormComponent } from './pedido-form/pedido-form/pedido-form.component';
import { PedidoListComponent } from './pedido-list/pedido-list/pedido-list.component';
import { authGuard } from 'src/app/guards/auth.guard';

export const PedidoRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'listado',
        component: PedidoListComponent,
      },
      {
        path: 'formulario',
        component: PedidoFormComponent,
      },
    ], canActivate: [authGuard],
  },
];
