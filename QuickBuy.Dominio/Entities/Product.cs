namespace QuickBuy.Domain.Entities
{
    public class Product : Entity
    {
        public int Id { get; set; }

        public string Nome { get; set; }

        public string Descricao { get; set; }

        public decimal Preco { get; set; }

        public string NomeArquivo { get; set; }

        public override void Validate()
        {
            if (string.IsNullOrEmpty(Nome))
                AdicionarCritica("Nome do Produto deve ser preenchido");

            if (Preco <= 0)
                AdicionarCritica("Preço do produto inválido");
        }
    }
}
