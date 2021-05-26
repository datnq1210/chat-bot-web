using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model.ServiceResult
{
    public class ServiceResult
    {
        /// <summary>
        /// Thành công?
        /// </summary>
        public bool Success { get; set; }

        /// <summary>
        /// Thông báo tới người dùng
        /// </summary>
        public string UserMessage { get; set; }

        /// <summary>
        /// Thông báo tới dev
        /// </summary>
        public string DevMessage { get; set; }

        /// <summary>
        /// Dữ liệu trả về
        /// </summary>
        public object Data { get; set; }

    }
}
