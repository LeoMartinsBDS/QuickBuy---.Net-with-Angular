using QuickBuy.Domain.Contracts;
using QuickBuy.Domain.Entities;
using QuickBuy.Repository.Contexto;

namespace QuickBuy.Repository.Repositorios
{
    public class PedidoRepositorio : BaseRepositorio<Order>, IPedidoRepositorio
    {
        public PedidoRepositorio(QuickBuyContext quickBuyContext) : base(quickBuyContext)
        {
        }
    }
}
