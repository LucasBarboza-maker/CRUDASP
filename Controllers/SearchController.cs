using CRUDREACT.Models;
using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CRUDREACT.Controllers
{
    [Controller]
    [Route("[controller]")]
    public class SearchController : Controller
    {
        private CRUDREACTContext context;
        [HttpGet("{name}")]
        public IEnumerable<People> GetByName([FromRoute] string name) 
        {
            context = HttpContext.RequestServices.GetService(typeof(CRUDREACT.Models.CRUDREACTContext)) as CRUDREACTContext;

            List<People> list = new List<People>();
            try
            {
                name = "%" + name + "%";
                MySqlParameter mySqlParameter = new MySqlParameter("searchName", name);

                list = context.GetPeopleBySearch(mySqlParameter);

            }
            catch (Exception exception)
            {
                throw exception;
            }

            return list;
        }
    }
}
