using Azure;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using webapi.Data;
using webapi.Modules;

namespace webapi.Controllers
{
    [Route("Arid/[controller]")]
    [ApiController]
    public class PageController : ControllerBase
    {

        private readonly ApplicationDbContext _context;

        public PageController(ApplicationDbContext context)
        {
          
            _context = context;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<HtmlPage>>> HtmlPages()
        {
            var all = await _context.Pages.ToListAsync();
            return all;
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBookedEvent(int id, HtmlPage page)
        {
            if (id != page.Id)
            {
                return BadRequest();
            }

            _context.Entry(page).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EventExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<HtmlPage>> PostPage(HtmlPage page)
        {
            _context.Pages.Add(page);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(PostPage), new { id = page.Id }, page);
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCourse(int id)
        {
            var pageobj = await _context.Pages.FindAsync(id);
            if (pageobj == null)
            {
                return NotFound();
            }

            _context.Pages.Remove(pageobj);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool EventExists(int id)
        {
            return _context.Pages.Any(e => e.Id == id);
        }



    }
}
