import { Component, OnInit } from "@angular/core";
import { LojaCarrinho } from "../carrinho/loja.carrinho.component";
import { Produto } from "../../model/produto";
import { Pedido } from "src/app/model/pedido";
import { UsuarioServico } from "src/app/servicos/usuario/usuario.servico";
import { ItemPedido } from "src/app/model/itemPedido";
import { PedidoServico } from "src/app/servicos/pedido/pedido.servico";
import { TouchSequence } from "selenium-webdriver";
import { Router } from "@angular/router";

@Component({
  selector: "loja-efetivar",
  templateUrl: "./loja.efetivar.component.html",
  styleUrls: ["./loja.efetivar.component.css"]
})
export class LojaEfetivarComponent implements OnInit {

  public lojaCarrinho: LojaCarrinho;
  public produtos: Produto[];
  public total: number;

  ngOnInit(): void {
    this.lojaCarrinho = new LojaCarrinho();
    this.produtos = this.lojaCarrinho.obterProdutos();
    this.atualizarTotal();
  }

  constructor(private usuarioServico: UsuarioServico, private pedidoServico: PedidoServico,
    private router: Router, ) {

  }

  public atualizarPreco(produto: Produto, quantidade: number) {

    if (!produto.precoOriginal) {
      produto.precoOriginal = produto.preco;
    }

    if (quantidade <= 0) {
      quantidade = 1;
      produto.quantidade = quantidade;
    }

    produto.preco = produto.precoOriginal * quantidade;
    this.lojaCarrinho.atualizar(this.produtos);
    this.atualizarTotal();
  }

  public removerProduto(produto: Produto) {
    this.lojaCarrinho.removerProduto(produto);
    this.produtos = this.lojaCarrinho.obterProdutos();
    this.atualizarTotal();
  }

  public atualizarTotal() {
    this.total = this.produtos.reduce((acc, produto) => acc + produto.preco, 0);
  }

  public efetivarComprar() {
    this.pedidoServico.efetivarCompra(this.criarPedido())
      .subscribe(
        pedidoId => {
          sessionStorage.setItem("pedidoId", pedidoId.toString());
          this.produtos = [];
          this.lojaCarrinho.limparCarrinhoComprar();

          this.router.navigate(["/compraRealizadaSucesso"]);
        },
        e => {
          console.log(e.error);
        });
  }

  public criarPedido(): Pedido {

    let pedido = new Pedido();
    pedido.usuarioId = this.usuarioServico.usuario.id;
    pedido.CEP = "123123";
    pedido.cidade = "Sao Paulo";
    pedido.estado = "Sao Paulo";
    pedido.dataPrevisaoEntrega = new Date();
    pedido.formaPagamentoId = 1;
    pedido.numeroEndereco = "12";
    pedido.enderecoCompleto = "Rua Riachuelo, Americana - Sao Paulo";

    this.produtos = this.lojaCarrinho.obterProdutos();
    for (let produto of this.produtos) {
      let itemPedido = new ItemPedido();
      itemPedido.produtoId = produto.id;

      if (!produto.quantidade)
        produto.quantidade = 1;

      itemPedido.quantidade = produto.quantidade
      pedido.itensPedido.push(itemPedido);
    }

    return pedido;
  }
}
