using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model.ChatBotModel
{
    /// <summary>
    /// Phản hồi
    /// </summary>
    public class Utters
    {
        /// <summary>
        /// Khoá chính
        /// </summary>
        public int Id { get; set; }

        /// <summary>
        /// Tên utters
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// utter uuid
        /// </summary>
        public Guid Utter_uuid { get; set; }
    }
}
