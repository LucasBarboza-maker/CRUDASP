using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MySql.Data.MySqlClient;

namespace CRUDREACT.Models
{
    public class CRUDREACTContext
    {
        public string ConnectionString { get; set; }

        public CRUDREACTContext(string connectionString)
        {
            this.ConnectionString = connectionString;
        }

        private MySqlConnection GetConnection()
        {
            return new MySqlConnection(ConnectionString);
        }

        public List<People> GetPeopleBySearch(MySqlParameter name)
        {

            List<People> list = new List<People>();

            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                MySqlCommand cmd = new MySqlCommand("SELECT * FROM People WHERE name LIKE @searchName", conn);
                cmd.Parameters.Add(name);
                using (var reader = cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        list.Add(new People()
                        {
                            idPeople = Convert.ToInt32(reader["idPeople"]),
                            name = reader["name"].ToString(),
                            rg = reader["rg"].ToString(),
                            cpf = reader["cpf"].ToString(),
                            telephone = reader["telephone"].ToString(),
                            dateOfBirth = Convert.ToDateTime(reader["dateOfBirth"])
                        });
                    }
                }
            }
            return list;

        }

        public void DeletePeople(MySqlParameter id)
        {
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                MySqlCommand cmd = new MySqlCommand("Delete from people where idPeople=@idPeople", conn);
                cmd.Parameters.Add(id);
                var reader = cmd.ExecuteReader();
            }
        }

        //BEGIN OF PEOPLE PART MODEL 

        public void UpdatePeople(People people)
        {
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                MySqlCommand cmd = new MySqlCommand("Update people set name = @name, rg = @rg, cpf = @cpf, telephone = @telephone, dateOfBirth = @dateOfBirth where idPeople = @idPeople;", conn);
                cmd.Parameters.AddWithValue("idPeople", people.idPeople);
                cmd.Parameters.AddWithValue("@name", people.name);
                cmd.Parameters.AddWithValue("@rg", people.rg);
                cmd.Parameters.AddWithValue("@cpf", people.cpf);
                cmd.Parameters.AddWithValue("@telephone", people.telephone);
                cmd.Parameters.AddWithValue("@dateOfBirth", people.dateOfBirth);
                var reader = cmd.ExecuteReader();

            }

        }

        public void InsertPeople(People people) 
        {
            
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                MySqlCommand cmd = new MySqlCommand("insert into people(name, rg, cpf, telephone, dateOfBirth) values(@name, @rg, @cpf, @telephone, @dateOfBirth);",conn);
                cmd.Parameters.AddWithValue("@name", people.name);
                cmd.Parameters.AddWithValue("@rg", people.rg);
                cmd.Parameters.AddWithValue("@cpf", people.cpf);
                cmd.Parameters.AddWithValue("@telephone", people.telephone);
                cmd.Parameters.AddWithValue("@dateOfBirth", people.dateOfBirth);
                var reader = cmd.ExecuteReader();
                
            }

        }

        public List<People> GetPeopleById(MySqlParameter id)
        {

            List<People> list = new List<People>();

            using(MySqlConnection conn = GetConnection())
            {
                conn.Open();
                MySqlCommand cmd = new MySqlCommand("SELECT * FROM People WHERE idPeople = @idPeople",conn);
                cmd.Parameters.Add(id);
                using (var reader = cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                       list.Add( new People()
                        {
                            idPeople = Convert.ToInt32(reader["idPeople"]),
                            name = reader["name"].ToString(),
                            rg = reader["rg"].ToString(),
                            cpf = reader["cpf"].ToString(),
                            telephone = reader["telephone"].ToString(),
                            dateOfBirth = Convert.ToDateTime(reader["dateOfBirth"])
                        });
                    }
                }
            }
            return list;

        } 

        public List<People> GetPeoples()
        {
            List<People> list = new List<People>();

            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                MySqlCommand cmd = new MySqlCommand("SELECT * FROM People", conn);

                using (var reader = cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        list.Add(new People()
                        {
                            idPeople = Convert.ToInt32(reader["idPeople"]),
                            name = reader["name"].ToString(),
                            rg = reader["rg"].ToString(),
                            cpf = reader["cpf"].ToString(),
                            telephone = reader["telephone"].ToString(),
                            dateOfBirth = Convert.ToDateTime(reader["dateOfBirth"])
                        });
                    }
                }
            }
            return list;
        }

        //END OF PEOPLE PART

            public List<Address> GetAddresses(MySqlParameter id)
            {
                    List<Address> list = new List<Address>();

                using (MySqlConnection conn = GetConnection())
                {
                    conn.Open();
                    MySqlCommand cmd = new MySqlCommand("SELECT * FROM Address where idPeople = @idPeople", conn);
                    cmd.Parameters.Add(id);

                    using (var reader = cmd.ExecuteReader())
                    {
                        while(reader.Read())
                        {
                            list.Add(new Address()
                            {
                                idAddress = Convert.ToInt32(reader["idAddress"]),
                                idPeople = Convert.ToInt32(reader["idPeople"]),
                                state = reader["state"].ToString(),
                                city = reader["city"].ToString(),
                                neighborhood = reader["neighborhood"].ToString(),
                                houseNumber = reader["houseNumber"].ToString()
                            });
                        }
                    }
                }

                    return list;
                
            }

            public void InsertAddress(int idPeople, Address address)
            {
                using (MySqlConnection conn = GetConnection())
                {
                    conn.Open();
                    MySqlCommand cmd = new MySqlCommand("insert into Address(idPeople, state, city, neighborhood, houseNumber) values(@idPeople, @state, @city, @neighborhood, @houseNumber);", conn);
                    cmd.Parameters.AddWithValue("@idPeople", idPeople);
                    cmd.Parameters.AddWithValue("@state", address.state);
                    cmd.Parameters.AddWithValue("@city", address.city);
                    cmd.Parameters.AddWithValue("@neighborhood", address.neighborhood);
                    cmd.Parameters.AddWithValue("@houseNumber", address.houseNumber);
                   
                    var reader = cmd.ExecuteReader();

                }

            }

            public void UpdateAddress(Address address)
            {
                using (MySqlConnection conn = GetConnection())
                {
                    conn.Open();
                    MySqlCommand cmd = new MySqlCommand("Update address SET state=@state, city=@city, neighborhood=@neighborhood, houseNumber=@houseNumber where idAddress = @idAddress ", conn);

                    cmd.Parameters.AddWithValue("@idAddress", address.idAddress);
                    cmd.Parameters.AddWithValue("@state", address.state);
                    cmd.Parameters.AddWithValue("@city", address.city);
                    cmd.Parameters.AddWithValue("@neighborhood", address.neighborhood);
                    cmd.Parameters.AddWithValue("@houseNumber", address.houseNumber);
                    
                    var reader = cmd.ExecuteReader();
                }       
            }

            public void DeleteAddress(MySqlParameter id)
            {
                using (MySqlConnection conn = GetConnection())
                {
                    conn.Open();
                    MySqlCommand cmd = new MySqlCommand("delete from address where idAddress=@idAddress", conn);
                    cmd.Parameters.Add(id);

                    var reader = cmd.ExecuteReader();
                }
            }
            
        //BEGIN OF ADDRESS PART MODEL

    }
}
