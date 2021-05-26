using BLL.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Model.ImportExcel;
using OfficeOpenXml;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace ChatBotApi.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class ImportExcelsController : ControllerBase
    {
        IImportExcelBL _importExcelBL;

        public ImportExcelsController(IImportExcelBL importExcelBL)
        {
            _importExcelBL = importExcelBL;
        }

        [HttpPost]
        public IActionResult Upload(IFormFile file)
        {
            return Ok(_importExcelBL.InsertDataFromExcelFile(file));
        }
    }
}
