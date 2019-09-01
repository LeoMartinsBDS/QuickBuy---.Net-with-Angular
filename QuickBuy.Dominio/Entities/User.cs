using System.Collections;
using System.Collections.Generic;

namespace QuickBuy.Domain.Entities
{
    public class User : Entity
    {
        public int Id { get; set; }

        public string Email { get; set; }

        public string Senha { get; set; }

        public string Nome { get; set; }

        public string SobreNome { get; set; }
        
        /// <summary>
        /// Um usuário pode ter nenhum ou muitos pedidos
        /// </summary>
        public virtual ICollection<Order> Pedidos { get; set; }

        public override void Validate()
        {
            if (string.IsNullOrEmpty(Email))
                AdicionarCritica("Email não foi informado");

            if (string.IsNullOrEmpty(Senha))
                AdicionarCritica("Senha não foi informado");
        }
    }
}
