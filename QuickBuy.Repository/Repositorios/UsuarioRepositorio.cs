using QuickBuy.Domain.Contracts;
using QuickBuy.Domain.Entities;
using QuickBuy.Repository.Contexto;
using System.Linq;

namespace QuickBuy.Repository.Repositorios
{
    public class UsuarioRepositorio : BaseRepositorio<User>, IUsuarioRepositorio
    {
        public UsuarioRepositorio(QuickBuyContext quickBuyContext) : base(quickBuyContext)
        {
        }

        public User Obter(string email, string senha)
        {
            return QuickBuyContext.Usuarios.FirstOrDefault(x => x.Email.Equals(email) && x.Senha.Equals(senha));
        }
    }
}
