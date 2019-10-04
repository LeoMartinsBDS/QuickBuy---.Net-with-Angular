import { Component, OnInit } from "@angular/core"
import { Produto } from "../model/Produto";
import { ProdutoServico } from "../servicos/produto/produto.servico";
import { Router } from "@angular/router";

@Component({
  selector: "app-produto",//defino o nome da tag onde o componente será renderizado.
  templateUrl: "./produto.component.html",
  styleUrls: ["./produto.component.css"]
})
//export é parecido com o public
export class ProdutoComponent implements OnInit {//Nome das classes começando com maisculo por conta da convenção Pascalcase

  public produto: Produto
  public arquivoSelecionado: File;
  public ativarSpinner: boolean;
  public mensagem: string;

  constructor(private produtoServico: ProdutoServico, private router: Router) {

  }

  ngOnInit(): void {
    var produtoSession = sessionStorage.getItem('produtoSession');
    if (produtoSession) {
      this.produto = JSON.parse(produtoSession);
    }
    else {
      this.produto = new Produto();
    }
  }

  public inputChange(files: FileList) {

    this.arquivoSelecionado = files.item(0);
    this.ativarEspera();
    this.produtoServico.enviarArquivo(this.arquivoSelecionado)
      .subscribe(
        retornoArquivo => {
          this.produto.nomeArquivo = retornoArquivo;
          this.desativarEspera();
        },
        e => {
          this.desativarEspera();
        }
      );
  }

  public cadastrar() {
    this.ativarEspera();
    this.produtoServico.cadastrar(this.produto)
      .subscribe(
        produtoRetorno => {
          this.desativarEspera();
          this.router.navigate(['./pesquisarProduto']);
        },
        e => {
          this.mensagem = e.error;
          this.desativarEspera();
        }
      );
  }

  public ativarEspera() {
    this.ativarSpinner = true;
  }

  public desativarEspera() {
    this.ativarSpinner = false;
  }
}
