import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Table } from 'reactstrap';
import Napigasi from './component/Napigasi';
import Jbtron from './component/Tronjumbo';
import Cards1 from './component/Card1';
import Card2 from './component/Card2';
import Mondokbody from './component/Mondokbody';

class App extends Component {
  render() {
    return (
      <div>
        <Napigasi />
        <Jbtron />
        <h2>
          <center>Daftar kajian koding</center>
        </h2>
        <Cards1 />
        <hr />
        <h2>
          <center>Daftar Santren kilat</center>
        </h2>
        <Card2 />
        <Mondokbody />
      </div>
    );
  }
}

export default App;
