using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CRUDREACT.Models
{
    public class Address
    {

        private CRUDREACTContext context;

        public int idAddress { get; set; }

        public int idPeople { get; set; }

        public string state { get; set; }

        public string city { get; set; }

        public string neighborhood { get; set; }

        public string houseNumber { get; set; }
    }
}
