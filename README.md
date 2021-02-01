# CRUDASP
I MADE A SIMPLE CRUD IN ASP TO LEARN ABOUT

Home Page
![alt text](https://github.com/LucasBarboza-maker/CRUDASP/blob/main/exampleImages/Home%20page.jpg?raw=true)

Info Page
![alt text](https://github.com/LucasBarboza-maker/CRUDASP/blob/main/exampleImages/peopleInfo.jpg?raw=true)

Update Page
![alt text](https://github.com/LucasBarboza-maker/CRUDASP/blob/main/exampleImages/paeopleInfo.jpg?raw=true)

Update Page
![alt text](https://github.com/LucasBarboza-maker/CRUDASP/blob/main/exampleImages/updateInfo.jpg?raw=true)

Sign Up
![alt text](https://github.com/LucasBarboza-maker/CRUDASP/blob/main/exampleImages/signUp.jpg?raw=true)

Search by name (Home Page)
![alt text](https://github.com/LucasBarboza-maker/CRUDASP/blob/main/exampleImages/searchName.jpg?raw=true)

Add address (Home Page)
![alt text](https://github.com/LucasBarboza-maker/CRUDASP/blob/main/exampleImages/addAddress.jpg?raw=true)

MYSQL Sripts
CREATE TABLE IF NOT EXISTS people (idPeople INT PRIMARY KEY AUTO_INCREMENT, name VARCHAR(500) NOT NULL, rg CHAR(9), cpf CHAR(11) NOT NULL, telephone CHAR(11), dateOfBirth date NOT NULL);

CREATE TABLE IF NOT EXISTS address(idAddress INT PRIMARY KEY AUTO_INCREMENT, idPeople INT, FOREIGN KEY(idPeople) REFERENCES people(idPeople) ON DELETE CASCADE, state VARCHAR(500) NOT NULL,  city VARCHAR(500) NOT NULL, neighborhood VARCHAR(500) NOT NULL, houseNumber VARCHAR(10) NOT NULL);


