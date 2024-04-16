import React, { Component } from 'react'
import DTH_eventHanlde1 from './components/DTH_eventHanlde1';
import DTH_eventHanlde2 from './components/DTH_eventHanlde2';
import DTH_eventHanlde3 from './components/DTH_eventHanlde3';
import DTH_eventHanlde4 from './components/DTH_eventHanlde4';

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1> Event form demo </h1>
        <DTH_eventHanlde1/>
        <DTH_eventHanlde2/>
        <DTH_eventHanlde3/>
        <DTH_eventHanlde4/>
        

      </div>
    );
  }
}
