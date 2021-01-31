import React, { Component, useState, useEffect } from 'react';
import { cardDiv } from '../Styles/HomeStyle';
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


    function handleClick(id) {
       
        history.push("/GetPeople/" + id);
    }
  
    return (
        <div>
            <h1>People List</h1>
            {people.map((p) => {
                return (
                    <cardDiv>
                        <h2>{p.name}</h2><h3>{p.dateOfBirth}</h3>
                        <button onClick={() => { handleClick(p.idPeople)}}> Go To</button>
                    </cardDiv>
                    
                    )
                })}
        
        </div>
    );
  
}

export default Home;
