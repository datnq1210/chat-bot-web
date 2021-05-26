using System;
using System.Collections.Generic;
using System.Text;

namespace Model.ChatBotModel
{
    public class UtterResponses
    {
        /// <summary>
        /// Khóa chính
        /// </summary>
        public int Id { get; set; }

        /// <summary>
        /// Nội dung 
        /// </summary>
        public string Content { get; set; }

        /// <summary>
        /// Khóa ngoại
        /// </summary>
        public int Utter_id { get; set; }

        /// <summary>
        /// Kiểu dữ liệu nội dung
        /// </summary>
        public string Type { get; set; }
    }
}
