using DAL.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Dapper;
using System.Threading.Tasks;
using MySql.Data.MySqlClient;
using Microsoft.Extensions.Configuration;

namespace DAL.Implement
{
    public class BaseDA : IBaseDA
    {
        IConfiguration _configuration;
        MySqlConnection _dbConnection;
        string _connectionString;
        public BaseDA(IConfiguration configuration)
        {
            _configuration = configuration;
            _connectionString = _configuration.GetConnectionString("ChatBotConnection");
            _dbConnection = new MySqlConnection(_connectionString);
        }

        public int ExecuteUsingCommandText(string commandText, Dictionary<string, object> param = null)
        {
            return _dbConnection.Execute(commandText, param, commandType: System.Data.CommandType.Text);
        }

        public int ExecuteUsingStoreProcedure(string commandText, Dictionary<string, object> param = null)
        {
            return _dbConnection.Execute(commandText, param, commandType: System.Data.CommandType.StoredProcedure);
        }

        public IEnumerable<T> QueryUsingCommandText<T>(string commandText, Dictionary<string, object> param = null)
        {
            return _dbConnection.Query<T>(commandText, param, commandType: System.Data.CommandType.Text);
        }

        public IEnumerable<T> QueryUsingStoredProcedure<T>(string commandText, Dictionary<string, object> param = null)
        {
            return _dbConnection.Query<T>(commandText, param, commandType: System.Data.CommandType.StoredProcedure);

        }
    }
}
