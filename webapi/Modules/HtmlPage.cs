using System.ComponentModel.DataAnnotations;

namespace webapi.Modules
{
    public class HtmlPage
    {
        [Key]
        public int Id { get; set; }
        public string Title { get; set; }
        public string  Html { get; set; }
        public string Css { get; set; }

    }
}
