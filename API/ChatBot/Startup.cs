using BLL.Implement;
using BLL.Interfaces;
using Common.Enum;
using DAL.Implement;
using DAL.Interfaces;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using Model.ServiceResult;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft;

namespace ChatBot
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            services.AddControllers();

            services.AddCors();

            services.AddScoped<IBaseDA, BaseDA>();
            services.AddScoped(typeof(IBaseBL<>), typeof(BaseBL<>));
            services.AddScoped<IExamplesBL, ExamplesBL>();
            services.AddScoped<IIntentsBL, IntentsBL>();
            services.AddScoped<IStoriesBL, StoriesBL>();
            services.AddScoped<IUtterResponsesBL, UtterResponsesBL>();
            services.AddScoped<IUttersBL, UttersBL>();
            services.AddScoped<IImportExcelBL, ImportExcelBL>();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "ChatBot", Version = "v1" });
            });


        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "ChatBot v1"));
                app.UseCors(o => o.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
            }

            app.UseExceptionHandler(a => a.Run(async context =>
            {
                var exceptionHandlerPathFeature = context.Features.Get<IExceptionHandlerPathFeature>();
                var exception = exceptionHandlerPathFeature.Error;

                var serviceResult = new ServiceResult();
                serviceResult.DevMessage = exception.Message;
                serviceResult.UserMessage = Common.Properties.Resources.UserExceptionMessage;
                serviceResult.Success = false;
                await context.Response.WriteAsJsonAsync(serviceResult);
            }));

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });


        }
    }
}
