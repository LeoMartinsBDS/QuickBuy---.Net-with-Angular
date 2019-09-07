using QuickBuy.Domain.Contracts;
using QuickBuy.Domain.Entities;
using QuickBuy.Repository.Contexto;

namespace QuickBuy.Repository.Repositorios
{
    public class UsuarioRepositorio : BaseRepositorio<User>, IUsuarioRepositorio
    {
        public UsuarioRepositorio(QuickBuyContext quickBuyContext) : base(quickBuyContext)
        {
        }
    }
}
