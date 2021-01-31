import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Edit from './components/Edit';
import People from './components/People';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
            <Route exact path='/SignUp' component={SignUp} />
            <Route exact path='/Edit' component={Edit} />
        <Route exact path='/GetPeople/:id' component={People} />
      </Layout>
    );
  }
}
