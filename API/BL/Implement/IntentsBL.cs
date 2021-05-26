using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BLL.Interfaces;
using DAL.Interfaces;
using Model.ChatBotModel;


namespace BLL.Implement
{
    public class IntentsBL : BaseBL<Intents>, IIntentsBL
    {
        IBaseDA _baseDA;
        public IntentsBL(IBaseDA baseDA) : base(baseDA)
        {
            _baseDA = baseDA;
        }
    }
}
