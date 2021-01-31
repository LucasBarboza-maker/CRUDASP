import React, { Component, useState, useEffect } from 'react';
import { cardDiv } from '../Styles/HomeStyle';

import { createBrowserHistory } from 'history';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";

  const history = createBrowserHistory({
        forceRefresh: true
    });

function Home() {



    const [people, setPeople] = useState([])
    let { id } = useParams();



    useEffect(async () => {
        const response = await fetch('people/' + id, { method: 'GET' });
        const data = await response.json();
        setPeople(data);

    }, [])

    function goToEdit(idPeople) {
        history.push({ pathname: "/Edit", state: { id: id } });
    }

    async function deletePeople(idPeople) {
        const response = await fetch('people/' + idPeople, { method: 'DELETE' });
        const data = await response.json();
        this.setState({ forecasts: data, loading: false });
    }

    

    return (
        <div>
            <h1>People List</h1>
            {people.map((p) => {
                return (
                    <cardDiv>
                        <h2>{p.name}</h2><h3>{p.rg}</h3>
                        <button onClick={() => { goToEdit(p.idPeople) }}> Edit</button>
                        <button onClick={() => { deletePeople(p.idPeople) }}> Delete</button>
                    </cardDiv>

                )
            })}

        </div>
    );

}

export default Home;
