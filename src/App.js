import React, { Component } from 'react';
import DistrictRepository from './helper';
import kinderData from '../data/kindergartners_in_full_day_program';
import Search from './Search';
import DataContainer from './DataContainer';
import SchoolCompare from './SchoolCompare';
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
    const compare1 = district.findByName(location)
    this.state.compare.push(compare1);
    (this.state.compare).length > 2 ? this.state.compare.shift() : null
    this.setState({
      compare: this.state.compare
    });
  }



  render() {

    return (
      <div>
        <Search handleChange={ this.handleChange } />
      {
        (this.state.compare).length === 2 &&
        <SchoolCompare comparison={ this.state.compare } districtComp={ this.showComparisonData }/>
      }
        <DataContainer schoolInfo={ this.state.data } compare={ this.compareDistricts }/>
      </div>
    )
  }
}

export default App;
