using BLL.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Model.ChatBotModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChatBotApi.Controllers
{
    public class ExamplesController : BaseController<Examples>
    {
        IExamplesBL _examplesBL;
        public ExamplesController(IExamplesBL examplesBL) : base(examplesBL)
        {
            _examplesBL = examplesBL;
        }
    }
}
