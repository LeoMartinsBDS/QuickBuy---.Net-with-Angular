import { Component, OnInit } from "@angular/core";
import { LojaCarrinho } from "../carrinho/loja.carrinho.component";
import { Produto } from "../../model/produto";

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
}
