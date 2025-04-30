export interface ProductoPedido{
    id: string;
    nombre?: string;
    precio?: number
    cantidad: number;
    subtotal?:number;
    fecha?: Date;
    total?: number;
}