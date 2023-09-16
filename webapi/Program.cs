using Microsoft.EntityFrameworkCore;
using webapi.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var myAllowOrigins = "_myAllowOrigins";
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: myAllowOrigins, policy =>
    {
        policy.WithOrigins("https://localhost:5173").AllowAnyHeader().AllowAnyMethod();
    });
});
<<<<<<< HEAD
=======

>>>>>>> 5673bf42ced898ff4e97108a21fdb18886ea630f
var connectionString = builder.Configuration.GetConnectionString("fullstackConnectionString");
builder.Services.AddDbContext<ApplicationDbContext>(options =>
{
    options.UseSqlServer(connectionString);
});


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

<<<<<<< HEAD
app.UseCors(myAllowOrigins);
=======
>>>>>>> 5673bf42ced898ff4e97108a21fdb18886ea630f
app.MapControllers();

app.Run();
