import React, { Component, useState, useEffect } from 'react';
import { Body, CardDiv, Search, Header, Footer } from '../Styles/HomeStyle';
import { SignUpLabel } from '../Styles/SignUpStyle';
import { InfoWrite } from '../Styles/infoStyle';


import { createBrowserHistory } from 'history';


import {
    useLocation
} from "react-router-dom";


function Home() {

    const location = useLocation();
    const people = location.state.people;

    const history = createBrowserHistory({
        forceRefresh: true
    });

    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [rg, setRg] = useState("");
    const [cpf, setCpf] = useState("");
    const [telephone, setTelephone] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [address, setAddress] = useState([]);

    useEffect(() => {
        setId(people.idPeople);
        setName(people.name);
        setRg(people.rg);
        setCpf(people.cpf);
        setTelephone(people.telephone);
        setDateOfBirth(people.dateOfBirth);
        setAddress(location.state.address);

    },[])

    function updatePeople() {

        let data = {
            method: 'PUT',
            credentials: 'same-origin',
            mode: 'same-origin',
            body: JSON.stringify({ idPeople: parseInt(id), name: name.toString(), rg: rg.toString(), cpf: cpf.toString(), telephone: telephone.toString(), dateOfBirth: dateOfBirth.toString() }),
            headers: {

                'Content-Type': 'application/json',

            }
        }
        fetch('people', data)
            .then(response => response.json())  // promise

        address.map((a) => {

            if (a.idPeople == null) {
                let data = {
                    method: 'POST',
                    credentials: 'same-origin',
                    mode: 'same-origin',
                    body: JSON.stringify({ idPeople: parseInt(id), state: a.state.toString(), city: a.city.toString(), neighborhood: a.neighborhood.toString(), houseNumber: a.houseNumber.toString() }),
                    headers: {

                        'Content-Type': 'application/json',

                    }
                }
                return fetch('address', data)
                    .then(response => response.json())  // promise
            } else {
                let data = {
                    method: 'PUT',
                    credentials: 'same-origin',
                    mode: 'same-origin',
                    body: JSON.stringify({ idAddress: parseInt(a.idAddress), state: a.state.toString(), city: a.city.toString(), neighborhood: a.neighborhood.toString(), houseNumber: a.houseNumber.toString() }),
                    headers: {

                        'Content-Type': 'application/json',

                    }
                }
                alert(a.state);
                fetch('address', data)
                    .then(response => response.json())  // promise
            }
        })


        alert("Dados Atualizados");
        history.push("/");
        
    }

   async function deleteAddress(a) {

        setAddress(address.filter(address => {
            if (address !== a) {
                return address;
            }
        }));

       if (a.idAddress !== null) {
           await fetch('address/' + a.idAddress, { method: 'DELETE' });
       }
       alert("Address Deleted");
    }

    function goToHome() {
       
        history.push("/");
    }

    function goToSignUp(id) {
       
        history.push("/SignUp");
    }

    function addAddress() {
        setAddress([...address, {idAddress: null, state: "", city: "", neighborhood: "", houseNumber: "" }]);
    }

    function onChangeState(e, index) {
        let newArray = [...address];
        newArray[index].state = e.target.value;
        setAddress(newArray);
    }

    function onChangeHouseCity(e, index) {
        let newArray = [...address];
        newArray[index].city = e.target.value;
        setAddress(newArray);
    }

    function onChangeNeighborhood(e, index) {
        let newArray = [...address];
        newArray[index].neighborhood = e.target.value;
        setAddress(newArray);
    }

    function onChangeHouseNumber(e, index) {
        let newArray = [...address];
        newArray[index].houseNumber = e.target.value;
        setAddress(newArray);
    }

    return (
        <Body style={{ backgroundColor: '#BEC4E1' }}>
            <Header>
                <h2 style={{ paddingBottom: 15, paddingTop: 10 }}>CRUD with REACT</h2>
                <button style={{ display: 'inline-block', width: '50%', backgroundColor: '#686E85', color: 'white', fontWeight: 'bold' }} onClick={goToHome}>HOME</button>
                <button style={{ display: 'inline-block', width: '50%', backgroundColor: '#686E85', color: 'white', fontWeight: 'bold' }} onClick={goToSignUp}>SIGNUP</button>
            </Header>

            <h1 style={{ textAlign: 'center', marginTop: 10, fontWeight: 'bold' }}>UPDATE</h1>
            
                <SignUpLabel style={{ fontWeight: 'bold', textAlign: 'center' }}>
                    Name:
                    <input onChange={event => setName(event.target.value)} value={name} />
                    <br />
                     Rg:
                    <input onChange={event => setRg(event.target.value)} value={rg} />
                    <br />
                    Cpf:
                    <input onChange={event => setCpf(event.target.value)} value={cpf} />
                    <br />
                    Telephone:
                    <input onChange={event => setTelephone(event.target.value)} value={telephone} />
                    <br />
                    dateOfBirth:
                    <input type="date" onChange={event => setDateOfBirth(event.target.value.toString())} value={dateOfBirth.replace('T00:00:00','')} />
                    <br />
                </SignUpLabel>
               

            {address.map((a, index) => {
                return (
                    <div style={{ textAlign: "center", backgroundColor: '#9A9EB3', width: '90%', display: 'block', marginLeft: 'auto', marginRight: 'auto', border: '2px solid black' }}>
                        <h1 style={{ textAlign: 'center', color: 'white' }}>ADDRESS</h1>

                        <SignUpLabel style={{ fontWeight: 'bold', textAlign: 'center' }}>
                            State:
                        <input onChange={event => onChangeState(event, index)} value={a.state} />
                            <br />
                         City:
                        <input onChange={event => onChangeHouseCity(event, index)} value={a.city} />
                            <br />
                        Neighborhood:
                        <input onChange={event => onChangeNeighborhood(event, index)} value={a.neighborhood} />
                            <br />
                        Number:
                        <input onChange={event => onChangeHouseNumber(event, index)} value={a.houseNumber} />
                            <br />

                        </SignUpLabel>
                        <button style={{ display: 'inline-block', width: '50%', backgroundColor: '#686E85', color: 'white', fontWeight: 'bold' }} onClick={() => deleteAddress(a)}>REMOVE ADDRESS</button>

                    </div>
                );
            })}


            <button style={{ display: 'inline-block', width: '50%', backgroundColor: '#686E85', color: 'white', fontWeight: 'bold' }} onClick={addAddress}>ADD ADDRESS</button>
            <button style={{ display: 'inline-block', width: '50%', backgroundColor: '#686E85', color: 'white', fontWeight: 'bold' }} onClick={updatePeople}>SUBMIT</button>

          
            <Footer>
                <h2 style={{ textAlign: 'center', fontSize: '25px', fontWeight: 'bold', color: 'white', paddingTop: 20 }}>This application was made by Lucas Rodrigues Barboza</h2>
            </Footer>
        </Body>
    );

}

export default Home;
