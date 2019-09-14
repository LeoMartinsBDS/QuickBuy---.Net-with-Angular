import { Component } from "@angular/core"

@Component({
  selector: "app-produto",//defino o nome da tag onde o componente será renderizado.
  template: "<html><body>{{ obterNome() }}</body></html>"//estrutura em html onde irei renderizar o componente.
})
//export é parecido com o public
export class ProdutoComponent {//Nome das classes começando com maisculo por conta da convenção Pascalcase

  //camelCase para variáveis, atributos e nomes das funções.
  public nome: string;
  public liberado: boolean;

  public obterNome(): string {
    return "Samsung";
  }

}
