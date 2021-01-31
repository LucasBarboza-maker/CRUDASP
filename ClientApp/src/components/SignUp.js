import React, { Component, useState, useEffect } from 'react';


function Home() {


    const [name, setName] = useState("");
    const [rg, setRg] = useState("");
    const [cpf, setCpf] = useState("");
    const [telephone, setTelephone] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");

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

    }


    return (
        <div>
            <h1>Sign UP</h1>
            <form>
                <label>
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
                    <input onChange={event => setDateOfBirth(event.target.value)} />
                    <br/>
                </label>
                <input onClick={signUp} type="submit" value="Submit" />
            </form>
        </div>
    );

}

export default Home;
