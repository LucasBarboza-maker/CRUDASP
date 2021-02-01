import React, { Component, useState, useEffect } from 'react';
import {Body, CardDiv, Search, Header, Footer}  from '../Styles/HomeStyle';
import { createBrowserHistory } from 'history';
import {
    useRouteMatch,
  
} from "react-router-dom";


function Home(){



    const [people, setPeople] = useState([])
    const history = createBrowserHistory({
        forceRefresh: true
    });
    const match = useRouteMatch();
  


    useEffect(async () => {
        const response = await fetch('people', { method: 'GET' });
        const data = await response.json();
        setPeople(data);

    }, [])


    function goToPeople(id) {
       
        history.push("/GetPeople/" + id);
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
            <form>
            <Search type="text" placeholder="Search for People" onChange={alert("Mudou")}></Search>
            <input type="submit" style={{display:'block', marginLeft:'auto', marginRight: 'auto'}}></input>
            </form>
            <div>
                <h1 style={{textAlign:'center', marginTop:10, fontWeight:'bold'}}>PEOPLE LIST</h1>
                {people.map((p) => {
                    return (
                        <CardDiv>
                            <div style={{width:'100%'}}>
                                <h2 style={{display:'inline-block', width:'48%', marginLeft:'2%', color:'white'}}>{p.name}</h2><h3 style={{display:'inline-block', width:'48%', textAlign:'right', marginRight:'2%', color:'white'}}>{p.dateOfBirth}</h3>
                            </div>
                            <br/>
                            <button style={{display:'block',marginLeft:'auto', marginRight:'auto', width:"100%", backgroundColor:'#686E85', color:'white', fontSize:'25px', fontWeight:'bold'}} onClick={() => { goToPeople(p.idPeople)}}> Go To</button>
                        </CardDiv>
                        
                        )
                    })}
            </div>
            <Footer>
                <h2 style={{textAlign:'center', fontSize:'25px', fontWeight:'bold', color:'white', paddingTop:20}}>This application was made by Lucas Rodrigues Barboza</h2>
            </Footer>
        </Body>
    );
  
}

export default Home;
