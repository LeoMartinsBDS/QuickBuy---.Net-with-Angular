using JetBrains.Annotations;
using Microsoft.EntityFrameworkCore;
using QuickBuy.Domain.Entities;
using QuickBuy.Domain.Valuables;

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

    }
}
