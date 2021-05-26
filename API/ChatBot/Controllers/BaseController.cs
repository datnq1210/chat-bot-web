using BLL.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ChatBotApi.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class BaseController<T> : ControllerBase
    {
        IBaseBL<T> _baseBL;

        public BaseController(IBaseBL<T> baseBL)
        {
            _baseBL = baseBL;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_baseBL.GetAllData());
        }

        [HttpPost]
        public IActionResult Post([FromBody] T model)
        {
            return Ok(_baseBL.InsertData(model));
        }

        [HttpPut]
        public IActionResult Put([FromBody] T model)
        {
            return Ok(_baseBL.UpdateData(model));
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            return Ok(_baseBL.DeleteData(id));
        }

    }
}
