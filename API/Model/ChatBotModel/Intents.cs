using System;

namespace Model.ChatBotModel
{
    /// <summary>
    /// Ý định người dùng
    /// </summary>
    public class Intents
    {
        /// <summary>
        ///  Khoá chính
        /// </summary>
        public int Id { get; set; }

        /// <summary>
        /// Tên intent
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// intent uuid
        /// </summary>
        public Guid Intent_uuid { get; set; }
    }
}
