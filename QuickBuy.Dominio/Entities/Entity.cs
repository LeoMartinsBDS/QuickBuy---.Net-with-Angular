using System.Collections.Generic;
using System.Linq;

namespace QuickBuy.Domain.Entities
{
    public abstract class Entity
    {
        public List<string> _mensagensValidacao { get; set; }

        private List<string> MensagemValidacao
        {
            get { return _mensagensValidacao ?? (_mensagensValidacao = new List<string>()); }
        }

        public abstract void Validate();

        protected void LimparMensagemValidacao()
        {
            MensagemValidacao.Clear();
        }

        protected void AdicionarCritica(string msg)
        {
            MensagemValidacao.Add(msg);
        }

        protected bool EhValido
        {
            get { return !MensagemValidacao.Any(); }
        }
    }
}
