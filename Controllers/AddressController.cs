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
    [Route("[Controller]")]
    public class AddressController : Controller
    {
        private CRUDREACTContext context;
  
       
        [HttpGet("{id}")]
        public IEnumerable<Address> GetAddresses([FromRoute] int id)
        {
            context = HttpContext.RequestServices.GetService(typeof(CRUDREACT.Models.CRUDREACTContext)) as CRUDREACTContext;

            List<Address> list = new List<Address>();
            try
            {
                MySqlParameter mySqlParameter = new MySqlParameter("idPeople", id);
              
                list = context.GetAddresses(mySqlParameter);
            
            }
            catch(Exception exception)
            {
                throw exception;
            }

            return list;


        }

        [HttpDelete("{id}")]
        public IActionResult DeleteAddress([FromRoute] int id)
        {
            context = HttpContext.RequestServices.GetService(typeof(CRUDREACT.Models.CRUDREACTContext)) as CRUDREACTContext;

            MySqlParameter mySqlParameter = new MySqlParameter("idAddress", id);
            try
            {
                context.DeleteAddress(mySqlParameter);
            }catch(Exception exception)
            {
                throw exception;
            }
                return Ok();
        }

        [HttpPost]
        public IActionResult InsertAddress([FromBody] Address address)
        {
            context = HttpContext.RequestServices.GetService(typeof(CRUDREACT.Models.CRUDREACTContext)) as CRUDREACTContext;
            try
            {
                context.InsertAddress(address.idPeople, address);
            }
            catch(Exception exception)
            {
                throw exception;
            }
            return Ok();
        }

        [HttpPut]
        public IActionResult UpdateAddress([FromBody]Address address)
        {
            context = HttpContext.RequestServices.GetService(typeof(CRUDREACT.Models.CRUDREACTContext)) as CRUDREACTContext;
            try
            {
                context.UpdateAddress(address);
            }
            catch (Exception exception)
            {
                throw exception;
            }
            return Ok();
        }
    }
}
