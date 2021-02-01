import React, { Component, useState, useEffect } from 'react';
import {Body, Header, Footer, SignUpLabel}  from '../Styles/SignUpStyle';
import { createBrowserHistory } from 'history';

function Home() {


    const [name, setName] = useState("");
    const [rg, setRg] = useState("");
    const [cpf, setCpf] = useState("");
    const [telephone, setTelephone] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");

    const history = createBrowserHistory({
        forceRefresh: true
    });

    function signUp() {

    

        let data = {
            method: 'POST',
            credentials: 'same-origin',
            mode: 'same-origin',
            body: JSON.stringify({ name: name.toString(), rg: rg.toString(), cpf: cpf.toString(), telephone: telephone.toString(), dateOfBirth: dateOfBirth.toString() }),
            headers: {

                'Content-Type': 'application/json',

            }
        }
        return fetch('people', data)
            .then(response => response.json())  // promise
            .finally(() => {
                alert('Usuário cadastrado');
                history.push("/");
            })
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
    
            <h1 style={{textAlign:'center', marginTop:10, fontWeight:'bold'}}>SIGN UP</h1>
            <form>
                <SignUpLabel style={{fontWeight:'bold', textAlign:'center'}}>
                    Name:    
                    <input onChange={event => setName(event.target.value)} />
                    <br/>
                     Rg:
                    <input onChange={event => setRg(event.target.value)} />
                    <br/>
                    Cpf:
                    <input onChange={event => setCpf(event.target.value)} />
                    <br />
                    Telephone:
                    <input onChange={event => setTelephone(event.target.value)} />
                    <br/>
                    dateOfBirth:
                    <input type="date" onChange={event => setDateOfBirth(event.target.value.toString())} />
                    <br/>
                </SignUpLabel>
                <input style={{display:'block', marginLeft:'auto', marginRight:'auto', width:'100%', backgroundColor:'#686E85', color:'white', fontWeight:'bold'}} onClick={signUp} type="submit" value="Submit" />
            </form>

            <Footer>
                <h2 style={{textAlign:'center', fontSize:'25px', fontWeight:'bold', color:'white', paddingTop:20}}>This application was made by Lucas Rodrigues Barboza</h2>
            </Footer>
        </Body>
    );

}

export default Home;
