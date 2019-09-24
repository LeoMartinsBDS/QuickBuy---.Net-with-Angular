using QuickBuy.Domain.Entities;

namespace QuickBuy.Domain.Contracts
{
    public interface IUsuarioRepositorio: IBaseRepositorio<User>
    {
        User Obter(string email, string senha);
    }
}
