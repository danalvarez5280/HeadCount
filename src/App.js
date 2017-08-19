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
      compare: [],
      compareCards: []
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
    // console.log(e.target);
    const compareItem = district.findByName(location);
    const compareData = this.state.compare;
    const index = compareData.indexOf(compareItem);

    if(compareData.includes(compareItem)){
      compareData.splice(index, 1)
      this.setState({
        compare: compareData,
        compareCards: compareData
      })
    }
    else if(compareData.length === 2){
      compareData.pop()
        this.setState({
          compare: compareData,
          compareCards: compareData
        })
        compareData.push(compareItem)
        this.setState({
          compare: compareData,
          compareCards: compareData
        })
    }
    else {
      this.state.compare.push(compareItem)
      this.setState({
        compare: compareData,
        compareCards: compareData
      })
    }
    this.toggleClass()
    // e.target.classList.toggle('data-card2')
    //  was trying to get a toggle class going but no
  }

  toggleClass() {
    const change = Document.getElementsByClassName('data-card');

    change.classList.toggle('data-card2')
  }

  removeCompare(location) {
    const choice = district.findByName(location)
    const compareData = this.state.compare
    const index = this.state.compare.indexOf(choice)
    compareData.splice(index, 1)
    this.setState({
      compare: compareData
    })
  }

  render() {
    console.log('state', this.state.compare);
    return (
      <div>
        <Search handleChange={ this.handleChange } />
        <DataContainer schoolInfo={ this.state.compare } compare={ this.removeCompare }/>
        {
          (this.state.compare).length === 2 && <DistrictCompare comparisonData={ this.state.compare }/>
        }
        <DataContainer schoolInfo={ this.state.data } compare={ this.compareDistricts }/>
      </div>
    )
  }
}

export default App;
