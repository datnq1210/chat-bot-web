using System;
using System.Collections.Generic;
using System.Text;

namespace Model.ChatBotModel
{
    public class Examples
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
        public Guid Intent_id { get; set; }
    }
}
