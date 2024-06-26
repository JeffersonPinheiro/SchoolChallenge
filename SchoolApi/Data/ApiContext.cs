using Microsoft.EntityFrameworkCore;
using EscolaApi.Models;

namespace EscolaApi.Data
{
    public class ApiContext : DbContext
    {
        public ApiContext(DbContextOptions<ApiContext> options) : base(options) 
        {
        }

        public DbSet<Student> Students { get; set; }
    }
}
