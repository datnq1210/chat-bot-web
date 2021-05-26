using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Interfaces
{
    public interface IBaseDA
    {
        #region Query SqlCommand
        /// <summary>
        /// Truy vấn tới database trả về một giá trị
        /// </summary>
        /// <typeparam name="T">Tên model</typeparam>
        /// <param name="commandText">Tên thủ tục</param>
        /// <param name="param"></param>
        /// <returns>Trả về một giá trị</returns>
        public IEnumerable<T> QueryUsingCommandText<T>(string commandText, Dictionary<string, object> param = null);

        /// <summary>
        /// Truy vấn tới database bằng thủ tục trả về giá trị
        /// </summary>
        /// <typeparam name="T">Tên model</typeparam>
        /// <param name="commandText">Tên thủ tục</param>
        /// <param name="param"></param>
        /// <returns>Trả về một giá trị</returns>
        public IEnumerable<T> QueryUsingStoredProcedure<T>(string commandText, Dictionary<string, object> param =null);
        #endregion

        #region Excute SqlCommand

        /// <summary>
        /// Thực thi một câu lệnh sql
        /// </summary>
        /// <param name="commandText">Câu lệnh sql</param>
        /// <param name="param"></param>
        /// <returns>Trả về số bản ghi bị ảnh hưởng</returns>
        public int ExecuteUsingCommandText(string commandText, Dictionary<string, object> param = null);

        /// <summary>
        /// Thực thi một câu lệnh sql dùng thủ tục
        /// </summary>1
        /// <param name="commandText">Tên thục tục</param>
        /// <param name="param"></param>
        /// <returns>Trả về số bản ghi bị ảnh hưởng</returns>
        public int ExecuteUsingStoreProcedure(string commandText, Dictionary<string, object> param = null);
        #endregion
    }
}
