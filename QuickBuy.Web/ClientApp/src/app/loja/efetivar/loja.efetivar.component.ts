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

  ngOnInit(): void {
    this.lojaCarrinho = new LojaCarrinho();
    this.produtos = this.lojaCarrinho.obterProdutos();
  }

  public atualizarPreco(produto: Produto, quantidade: number) {

    if (!produto.precoOriginal) {
      produto.precoOriginal = produto.preco;
    }
      
    produto.preco = produto.precoOriginal * quantidade;
  }

}
