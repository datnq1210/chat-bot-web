using BLL.Interfaces;
using DAL.Interfaces;
using Model.ChatBotModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Implement
{
    public class UtterResponsesBL: BaseBL<UtterResponses>, IUtterResponsesBL
    {
        IBaseDA _baseDA;
        public UtterResponsesBL(IBaseDA baseDA): base(baseDA)
        {
            _baseDA = baseDA;
        }
    }
}
