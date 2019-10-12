"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LojaCarrinho = /** @class */ (function () {
    function LojaCarrinho() {
        this.produtos = [];
    }
    LojaCarrinho.prototype.adicionar = function (produto) {
        var produtoLocalStorage = localStorage.getItem("produtoLocalStorage");
        if (!produtoLocalStorage) {
            this.produtos.push(produto);
        }
        else {
            this.produtos = JSON.parse(produtoLocalStorage);
            this.produtos.push(produto);
        }
        localStorage.setItem("produtoLocalStorage", JSON.stringify(this.produtos));
    };
    LojaCarrinho.prototype.obterProdutos = function () {
        var produtoLocalStorage = localStorage.getItem("produtoLocalStorage");
        if (produtoLocalStorage)
            return JSON.parse(produtoLocalStorage);
    };
    LojaCarrinho.prototype.removerProduto = function (produto) {
        var produtoLocalStorage = localStorage.getItem("produtoLocalStorage");
        if (produtoLocalStorage)
            this.produtos = JSON.parse(produtoLocalStorage);
        this.produtos = this.produtos.filter(function (p) { return p.id != produto.id; });
        localStorage.setItem("produtoLocalStorage", JSON.stringify(this.produtos));
    };
    LojaCarrinho.prototype.atualizar = function (produtos) {
        localStorage.setItem("produtoLocalStorage", JSON.stringify(produtos));
    };
    return LojaCarrinho;
}());
exports.LojaCarrinho = LojaCarrinho;
//# sourceMappingURL=loja.carrinho.component.js.map