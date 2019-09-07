using QuickBuy.Domain.Contracts;
using QuickBuy.Domain.Entities;
using QuickBuy.Repository.Contexto;

namespace QuickBuy.Repository.Repositorios
{
    public class ProdutoRepositorio : BaseRepositorio<Product>, IProdutoRepositorio
    {
        public ProdutoRepositorio(QuickBuyContext quickBuyContext) : base(quickBuyContext)
        {
        }
    }
}
