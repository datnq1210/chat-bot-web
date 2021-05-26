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
    public class StoriesController : BaseController<Stories>
    {
        IStoriesBL _storiesBL;
        public StoriesController(IStoriesBL storiesBL) : base(storiesBL)
        {
            _storiesBL = storiesBL;
        }
    }
}
