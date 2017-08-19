import React, { Component } from 'react';
import DistrictRepository from './helper';
import kinderData from '../data/kindergartners_in_full_day_program';
import Search from './Search';
import DataContainer from './DataContainer';
import DistrictCompare from './DistrictCompare';
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
    this.removeCompare = this.removeCompare.bind(this);
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

  removeCompare(location) {
    const choice = district.findByName(location)
    const index = this.state.compare.indexOf(choice)
    this.state.compare.splice(index, 1)
    this.setState({
      compare: this.state.compare
    })
    console.log('im running');
  }

  render() {
    console.log(this.state.compare);
    return (
      <div>
        <Search handleChange={ this.handleChange } />
        {
         (this.state.compare).length === 2 && <DistrictCompare comparisonData={ this.state.compare } removeCompare={ this.removeCompare }/>
        }
        <DataContainer schoolInfo={ this.state.data } compare={ this.compareDistricts }/>
      </div>
    )
  }
}

export default App;
