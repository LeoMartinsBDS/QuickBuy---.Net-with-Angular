using QuickBuy.Domain.Contracts;
using QuickBuy.Domain.Entities;

namespace QuickBuy.Repository.Repositorios
{
    public class ProdutoRepositorio : BaseRepositorio<Product>, IProdutoRepositorio
    {
        public ProdutoRepositorio() { }
    }
}
