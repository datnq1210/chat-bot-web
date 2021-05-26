using Microsoft.AspNetCore.Http;
using Model.ImportExcel;
using Model.ServiceResult;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Interfaces
{
    public interface IImportExcelBL
    {
        /// <summary>
        /// Thêm dữ liệu file vào db
        /// </summary>
        /// <param name="file"></param>
        /// <returns></returns>
        ServiceResult InsertDataFromExcelFile(IFormFile file);
    }
}
