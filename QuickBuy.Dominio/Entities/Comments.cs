using System;

namespace QuickBuy.Domain.Entities
{
    public class Comments : Entity
    {
        public int Id { get; set; }

        public string Comentario { get; set; }

        public int AvaliacaoProduto { get; set; }

        public virtual User Usuario { get; set; }

        public DateTime DataHoraComentario { get; set; }

        public override void Validate()
        {
            if (string.IsNullOrEmpty(Comentario))
               AdicionarCritica("Comentário não foi informado");
        }
    }
}
