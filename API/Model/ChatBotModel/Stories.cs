using System;
using System.Collections.Generic;
using System.Text;

namespace Model.ChatBotModel
{
    public class Stories
    {
        /// <summary>
        /// Khóa chính
        /// </summary>
        public int Id { get; set; }

        /// <summary>
        /// Tên kịch bản : gồm câu hỏi và câu trả lời
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// story uuid
        /// </summary>
        public Guid Story_uuid { get; set; }
    }
}
