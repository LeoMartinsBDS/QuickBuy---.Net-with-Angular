import { ItemPedido } from "./itemPedido";

export class Pedido {

    public id: number;
    public dataPedido: Date;
    public usuarioId: number;
    public dataPrevisaoEntrega: Date;
    public CEP: string;
    public estado: string;
    public cidade: string;
    public enderecoCompleto: string;
    public numeroEndereco: string;
    public formaPagamentoId: number;
    public itensPedido: ItemPedido[];

    constructor() {
        this.itensPedido = [];
        this.dataPedido = new Date();
    }
}