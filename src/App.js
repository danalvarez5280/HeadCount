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
      data: district.findAllMatches(),
      compare: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.compareDistricts = this.compareDistricts.bind(this);
  }

  handleChange(e) {
    this.setState({
      data: district.findAllMatches(e.target.value)
    })
  }

  compareDistricts(location) {
    console.log(location);
    const compare1 = district.findByName(location)
    this.state.compare.push(compare1)
    this.setState({
      compare: this.state.compare
    })
  }

  render() {
    return (
      <div>
        <Search handleChange={ this.handleChange } />
        <DataContainer schoolInfo={ this.state.data } compare={ this.compareDistricts }/>
      </div>
    )
  }
}

export default App;
