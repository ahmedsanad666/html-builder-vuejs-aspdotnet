using Microsoft.EntityFrameworkCore;
using webapi.Modules;

namespace webapi.Data
{
    public class ApplicationDbContext :DbContext 
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }

        public DbSet<HtmlPage> Pages { get; set; }
    }
}
