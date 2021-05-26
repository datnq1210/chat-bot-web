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
    public class UtterResponsesController : BaseController<UtterResponses>
    {
        IUtterResponsesBL _utterResponsesBL;
        public UtterResponsesController(IUtterResponsesBL utterResponsesBL) : base(utterResponsesBL)
        {
            _utterResponsesBL = utterResponsesBL;
        }
    }
}
