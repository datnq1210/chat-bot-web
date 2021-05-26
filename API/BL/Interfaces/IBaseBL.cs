using Model.ServiceResult;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Interfaces
{
    public interface IBaseBL<T>
    {
        /// <summary>
        /// Hàm lấy tât cả dữ liệu
        /// </summary>
        /// <returns></returns>
        public ServiceResult GetAllData();

        /// <summary>
        /// Hàm thêm mới dữ liệu
        /// </summary>
        /// <returns></returns>
        public ServiceResult InsertData(T model);

        /// <summary>
        /// Hàm cập nhật một bản ghi
        /// </summary>
        /// <returns></returns>
        public ServiceResult UpdateData(T model);

        /// <summary>
        /// Hàm cập nhật nhiều bản ghi
        /// </summary>
        /// <returns></returns>
        public ServiceResult UpdateMultipleData(List<T> model);
        
        /// <summary>
        /// Hàm xóa một bản ghi theo id
        /// </summary>
        /// <returns></returns>
        public ServiceResult DeleteData(int id);

        /// <summary>
        /// Hàm xóa nhiều bản ghi
        /// </summary>
        /// <returns></returns>
        public ServiceResult DeleteMultipleData(List<int> ids);

    }
}
