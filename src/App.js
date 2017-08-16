import React, { Component } from 'react';
import DistrictRepository from './helper';
import kinderData from '../data/kindergartners_in_full_day_program';
import Search from './Search';
import DataContainer from './DataContainer';
import './App.css';

const district = new DistrictRepository(kinderData)

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: district.findAllMatches()
    }
  }

  render() {
    return (
      <div>
        <Search />
        <DataContainer schoolInfo={ this.state.data } />
      </div>
    )
  }
}

export default App;
