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
    public class UttersController : BaseController<Utters>
    {
        IUttersBL _uttersBL;
        public UttersController(IUttersBL uttersBL) : base(uttersBL)
        {
            _uttersBL = uttersBL;
        }
    }
}
