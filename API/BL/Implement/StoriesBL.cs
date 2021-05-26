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
    public class StoriesBL: BaseBL<Stories>, IStoriesBL
    {
        IBaseDA _baseDA;
        public StoriesBL(IBaseDA baseDA) : base(baseDA)
        {
            _baseDA = baseDA;
        }
    }
}
