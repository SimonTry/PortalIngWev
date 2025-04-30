import { ProductoPedido } from "./producto-pedido.model";

export interface Pedido{
    id?: string,
    fecha?: Date,
    total?: number,
    cliente: string,
    productos?: ProductoPedido[]
}