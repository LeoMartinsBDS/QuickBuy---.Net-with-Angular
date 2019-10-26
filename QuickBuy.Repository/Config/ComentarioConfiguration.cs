using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using QuickBuy.Domain.Entities;

namespace QuickBuy.Repository.Config
{
    class ComentarioConfiguration : IEntityTypeConfiguration<Comments>
    {
        public void Configure(EntityTypeBuilder<Comments> builder)
        {
            builder.HasKey(f => f.Id);

            builder
                .Property(f => f.Comentario)
                .IsRequired()
                .HasMaxLength(500);

            builder
                .Property(f => f.DataHoraComentario)
                .IsRequired();

        }
    }
}
