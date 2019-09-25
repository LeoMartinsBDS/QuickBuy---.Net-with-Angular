import { Component, OnInit } from "@angular/core"
import { Produto } from "../model/Produto";
import { ProdutoServico } from "../servicos/produto/produto.servico";

@Component({
  selector: "app-produto",//defino o nome da tag onde o componente será renderizado.
  templateUrl: "./produto.component.html",
  styleUrls: ["./produto.component.css"]
})
//export é parecido com o public
export class ProdutoComponent implements OnInit {//Nome das classes começando com maisculo por conta da convenção Pascalcase
  public produto: Produto

  constructor(private produtoServico: ProdutoServico) {

  }

  ngOnInit(): void {
    this.produto = new Produto();
  }

  public cadastrar() {
    this.produtoServico.cadastrar(this.produto)
      .subscribe(
      produtoRetorno => {

      },
      e => {
          
      }
      );
  }
}
