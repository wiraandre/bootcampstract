import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Table } from 'reactstrap';
import Napigasi from './component/Napigasi';
import Jbtron from './component/Tronjumbo';

class App extends Component {
  render() {
    return (
      <div>
        <Napigasi />
        <Jbtron />
      </div>
    );
  }
}

export default App;
