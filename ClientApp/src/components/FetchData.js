import React, { Component } from 'react';

export class FetchData extends Component {
  static displayName = FetchData.name;

  constructor(props) {
    super(props);
    this.state = { forecasts: [], loading: true };
  }

  componentDidMount() {
    this.populateWeatherData();
  }

  static renderForecastsTable(forecasts) {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Date</th>
            <th>Temp. (C)</th>
            <th>Temp. (F)</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          {forecasts.map(forecast =>
              <tr key={forecast.state}>
                  <td>{forecast.state}</td>
              <td>{forecast.city}</td>
              <td>{forecast.neighborhood}</td>
              <td>{forecast.houseNumber}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : FetchData.renderForecastsTable(this.state.forecasts);

    return (
      <div>
        <h1 id="tabelLabel" >Weather forecast</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }

    async populateWeatherData() {
      /*
    const response = await fetch('people/1',{method:'GET'});
    const data = await response.json();
    this.setState({ forecasts: data, loading: false });
    */

        /*
        let data = {
            method: 'POST',
            credentials: 'same-origin',
            mode: 'same-origin',
            body: JSON.stringify({ name: "Pedro", rg: "111111111", cpf: "17740586773", telephone: "24993017636", dateOfBirth: "2002-05-06" }),
            headers: {

                'Content-Type': 'application/json',

            }
        }
        return fetch('people', data)
            .then(response => response.json())  // promise
            */

        /*
        let data = {
            method: 'PUT',
            credentials: 'same-origin',
            mode: 'same-origin',
            body: JSON.stringify({ idPeople:3, name: "O mais brabo", rg: "111111111", cpf: "17740586773", telephone: "24993017636", dateOfBirth: "2002-05-06" }),
            headers: {

                'Content-Type': 'application/json',

            }
        }
        return fetch('people', data)
            .then(response => response.json())  // promise
            */

        /*
        const response = await fetch('people/3', { method: 'DELETE' });
        const data = await response.json();
        this.setState({ forecasts: data, loading: false });
        */

        /*
        const response = await fetch('address/1', { method: 'GET' });
        const data = await response.json();
        this.setState({ forecasts: data, loading: false });
        */

        /*
        let data = {
            method: 'POST',
            credentials: 'same-origin',
            mode: 'same-origin',
            body: JSON.stringify({ idPeople: 2, state: "Sao Paulo", city: "Sao paulo", neighborhood: "liberdade", houseNumber: "700" }),
            headers: {

                'Content-Type': 'application/json',

            }
        }
        return fetch('address', data)
            .then(response => response.json())  // promise

        */

        /*
        let data = {
            method: 'PUT',
            credentials: 'same-origin',
            mode: 'same-origin',
            body: JSON.stringify({idAddress:1, state: "Santa Catarina", city: "Florianopolis", neighborhood: "Ingleses", houseNumber: "700" }),
            headers: {

                'Content-Type': 'application/json',

            }
        }
        return fetch('address', data)
            .then(response => response.json())  // promise

          */
        const response = await fetch('address/4', { method: 'DELETE' });
        const data = await response.json();
        this.setState({ forecasts: data, loading: false });

  }
}
