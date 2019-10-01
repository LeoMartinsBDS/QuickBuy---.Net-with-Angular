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
  public arquivoSelecionado: File;
  public ativarSpinner: boolean;
  public mensagem: string;

  constructor(private produtoServico: ProdutoServico) {

  }

  ngOnInit(): void {
    this.produto = new Produto();
  }

  public inputChange(files: FileList) {

    this.arquivoSelecionado = files.item(0);
    this.ativarEspera();
    this.produtoServico.enviarArquivo(this.arquivoSelecionado)
      .subscribe(
        retornoArquivo => {
          this.produto.nomeArquivo = retornoArquivo;
          alert(retornoArquivo);
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
