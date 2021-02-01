import React, { Component, useState, useEffect } from 'react';
import { Body, CardDiv, Search, Header, Footer } from '../Styles/HomeStyle';
import { InfoWrite } from '../Styles/infoStyle';

import { createBrowserHistory } from 'history';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";

 

function Home() {

    const history = createBrowserHistory({
        forceRefresh: true
    });

    const [people, setPeople] = useState([]);
    const [address, setAddress] = useState([]);
    let { id } = useParams();



    useEffect(async () => {
        const responsePeople = await fetch('people/' + id, { method: 'GET' });
        const dataPeople = await responsePeople.json();
        setPeople(dataPeople);

        const responseAddress = await fetch('address/'+ id, { method: 'GET' });
        const dataAddress = await responseAddress.json();
        setAddress(dataAddress);

    }, [])

    function goToEdit(people, address) {
        history.push({ pathname: "/Edit", state: { people: people, address: address } });
    }

    async function deletePeople(idPeople) {
        const response = await fetch('people/' + idPeople, { method: 'DELETE' })
        .then(response => response.json())  
        .finally(() => {
            alert('Usuário deletado');
            history.push("/");})
    }

    function goToHome() {
       
        history.push("/");
    }

    function goToSignUp(id) {
       
        history.push("/SignUp");
    }

    return (
        <Body style={{backgroundColor:'#BEC4E1'}}>
        <Header>
            <h2 style={{paddingBottom:15, paddingTop:10}}>CRUD with REACT</h2>
            <button style={{display:'inline-block' ,width:'50%', backgroundColor:'#686E85', color:'white', fontWeight:'bold'}} onClick={goToHome}>HOME</button>
            <button style={{display: 'inline-block', width:'50%',backgroundColor:'#686E85', color:'white', fontWeight:'bold'}} onClick={goToSignUp}>SIGNUP</button>
            </Header>
            <h1 style={{ textAlign: 'center', color: 'white'}}>PEOPLE INFO</h1>
            {people.map((p) => {
                return (
                    <div style={{textAlign:"center", backgroundColor:'#9A9EB3', width:'90%', display:'block', marginLeft:'auto', marginRight:'auto', border:'2px solid black'}}>
                        <InfoWrite>Name:</InfoWrite>
                        <InfoWrite>{p.name}</InfoWrite>
                        
                        <InfoWrite>RG:</InfoWrite>
                        <InfoWrite>{p.rg}</InfoWrite>

                        <InfoWrite>CPF:</InfoWrite>
                        <InfoWrite>{p.cpf}</InfoWrite>
                        
                        <InfoWrite>Telephone:</InfoWrite>
                        <InfoWrite>{p.telephone}</InfoWrite>
                        
                        <InfoWrite>Birth:</InfoWrite>
                        <InfoWrite>{p.dateOfBirth}</InfoWrite>

                        <div style={{color:'#C2C9EC', border:'2px solid black' }}>
                          
                            {address.map((a) => {
                                return (
                                    <div style={{ textAlign: "center", backgroundColor: '#9A9EB3', width: '90%', display: 'block', marginLeft: 'auto', marginRight: 'auto', border: '2px solid black' }}>
                                        <h1 style={{ textAlign: 'center', color: 'white' }}>ADDRESS</h1>

                                        <InfoWrite>State:</InfoWrite>
                                        <InfoWrite>{a.state}</InfoWrite>

                                        <InfoWrite>City:</InfoWrite>
                                        <InfoWrite>{a.city}</InfoWrite>

                                        <InfoWrite>Neighborhood:</InfoWrite>
                                        <InfoWrite>{a.neighborhood}</InfoWrite>

                                        <InfoWrite>Number:</InfoWrite>
                                        <InfoWrite>{a.houseNumber}</InfoWrite>
                                    </div>
                                    );
                            })}
                        </div>
                        <button style={{display:'inline-block' ,width:'50%', backgroundColor:'#686E85', color:'white', fontWeight:'bold'}} onClick={() => deletePeople(p.idPeople)}>DELETE</button>
                        <button style={{display: 'inline-block', width:'50%',backgroundColor:'#686E85', color:'white', fontWeight:'bold'}} onClick={() => goToEdit(p,address)}>EDIT</button>
                    </div>

                )
            })}

            <Footer>
                <h2 style={{textAlign:'center', fontSize:'25px', fontWeight:'bold', color:'white', paddingTop:20}}>This application was made by Lucas Rodrigues Barboza</h2>
            </Footer>

        </Body>
    );

}

export default Home;
