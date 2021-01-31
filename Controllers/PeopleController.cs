using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CRUDREACT.Models;
using MySql.Data.MySqlClient;
using Newtonsoft.Json;

namespace CRUDREACT.Controllers
{
    [Controller]
    [Route("[controller]")]
    public class PeopleController : Controller
    {

        public CRUDREACTContext getContext()
        {
           return HttpContext.RequestServices.GetService(typeof(CRUDREACT.Models.CRUDREACTContext)) as CRUDREACTContext;
        }

        [HttpGet]
        public IEnumerable<People> GetPeoples()
        {
            CRUDREACTContext context = getContext();
            return context.GetPeoples();
        }

        [HttpGet("{id}")]
        public IEnumerable<People> GetPeopleByID([FromRoute] int id)
        {
            CRUDREACTContext context = HttpContext.RequestServices.GetService(typeof(CRUDREACT.Models.CRUDREACTContext)) as CRUDREACTContext;
            MySqlParameter mySqlParameter = new MySqlParameter("idPeople", id);
            return context.GetPeopleById(mySqlParameter);
        }

        [HttpDelete("{id}")]

        public IActionResult deletePeople([FromRoute] int id)
        {
            CRUDREACTContext context = HttpContext.RequestServices.GetService(typeof(CRUDREACT.Models.CRUDREACTContext)) as CRUDREACTContext;
            MySqlParameter mySqlParameter = new MySqlParameter("idPeople", id);
            context.DeletePeople(mySqlParameter);
            return Ok();
        }

        [HttpPost]
        public IActionResult InsertPeople([FromBody] People people)
        {
          
        
            CRUDREACTContext context = HttpContext.RequestServices.GetService(typeof(CRUDREACT.Models.CRUDREACTContext)) as CRUDREACTContext;
            context.InsertPeople(people);
           
            return Ok();

        }

        [HttpPut]
        public IActionResult UpdatePeople([FromBody] People people)
        {
            CRUDREACTContext context = HttpContext.RequestServices.GetService(typeof(CRUDREACT.Models.CRUDREACTContext)) as CRUDREACTContext;
            context.UpdatePeople(people);

            return Ok();

        }

    }
}
