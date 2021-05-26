using BLL.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Model.ChatBotModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ChatBotApi.Controllers
{
    public class IntentsController : BaseController<Intents>
    {
        // GET: api/<IntentsController>
        IIntentsBL _intentsBL;
        public IntentsController(IIntentsBL intentsBL): base(intentsBL)
        {
            _intentsBL = intentsBL;
        }

    }
}
