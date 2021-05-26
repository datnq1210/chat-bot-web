using BLL.Interfaces;
using DAL.Interfaces;
using Microsoft.AspNetCore.Http;
using Model.ServiceResult;
using Model.ImportExcel;
using OfficeOpenXml;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
namespace BLL.Implement
{
    public class ImportExcelBL : IImportExcelBL
    {
        IBaseDA _baseDA;
        public ImportExcelBL(IBaseDA baseDA)
        {
            _baseDA = baseDA;
        }

        public ServiceResult InsertDataFromExcelFile(IFormFile file)
        {
            var serviceResult = new ServiceResult();
            //Đọc dữ liệu file excel
            if (file == null)
            {
                serviceResult.Success = false;
                serviceResult.UserMessage = Common.Properties.Resources.UploadNullData;
                return serviceResult;
            }
            List<DataChatBotExcel> data = new List<DataChatBotExcel>();
            using (var stream = new MemoryStream())
            {
                file.CopyToAsync(stream);
                using (var package = new ExcelPackage(stream))
                {
                    ExcelWorksheet worksheet = package.Workbook.Worksheets.FirstOrDefault();
                    var rowCount = worksheet.Dimension.Rows;
                    var columnCount = worksheet.Dimension.Columns;
                    for (int i = 2; i <= rowCount; i++)
                    {
                        int j = 1;
                        var index = worksheet.GetMergeCellId(i, j);
                        var Intent = string.Empty;
                        if (index > 0)
                        {
                            var mergeCellRange = worksheet.MergedCells[index - 1].ToString();
                            Intent = worksheet.Cells[mergeCellRange].FirstOrDefault().Value.ToString();
                        }
                        else
                        {
                            Intent = worksheet.Cells[i, j].Value.ToString();
                        }
                        var Content = worksheet.Cells[i, j + 1].Value.ToString();
                        var Utter = worksheet.Cells[i, j + 2].Value.ToString();
                        var model = new DataChatBotExcel()
                        {
                            Intent = Intent,
                            Utter = Utter,
                            Content = Content
                        };
                        data.Add(model);
                    }
                }
            }
            var callProcImportExcelCommand = "CALL Proc_ImprotExcel('{0}','{1}','{2}','{3}');";
            var callProcImporExcel = new StringBuilder();
            foreach (var item in data)
            {
                callProcImporExcel.Append(string.Format(callProcImportExcelCommand, item.Intent, item.Content,item.Utter, $"story { item.Intent}"));
            }
            var res = _baseDA.ExecuteUsingCommandText(callProcImporExcel.ToString());
            if (res > 0)
            {
                serviceResult.Success = true;
                serviceResult.Data = res;
                serviceResult.UserMessage = Common.Properties.Resources.InsertSuccess;
            }
            else
            {
                serviceResult.Success = false;
                serviceResult.UserMessage = Common.Properties.Resources.InsertFail;
            }
            return serviceResult;
        }
    }
}