using JetBrains.Annotations;
using Microsoft.EntityFrameworkCore;
using QuickBuy.Domain.Entities;
using QuickBuy.Domain.Valuables;
using QuickBuy.Repository.Config;

namespace QuickBuy.Repository.Contexto
{
    public class QuickBuyContext: DbContext
    {
        public DbSet<User> Usuarios { get; set; }

        public DbSet<Product> Produtos { get; set; }

        public DbSet<Order> Pedidos { get; set; }

        public DbSet<OrderItem> ItensPedidos { get; set; }

        public DbSet<FormaPagamento> FormaPagamento { get; set; }

        public QuickBuyContext(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //faço referência as classes de mapeamento
            modelBuilder.ApplyConfiguration(new UsuarioConfiguration());
            modelBuilder.ApplyConfiguration(new PedidoConfiguration());
            modelBuilder.ApplyConfiguration(new ItemPedidoConfiguration());
            modelBuilder.ApplyConfiguration(new ProdutoConfiguration());
            modelBuilder.ApplyConfiguration(new FormaPagamentoConfiguration());
            base.OnModelCreating(modelBuilder);
        }
    }
}
