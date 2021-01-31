using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CRUDREACT.Models
{
    public class People
    {
        private CRUDREACTContext context;


        public int idPeople { get; set; }
    
        public string name { get; set; }

        public string rg { get; set; }

        public string cpf { get; set; }

        public string telephone { get; set; }

        public DateTime dateOfBirth { get; set; }
    }
}
