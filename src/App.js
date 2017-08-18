import React, { Component } from 'react';
import DistrictRepository from './helper';
import kinderData from '../data/kindergartners_in_full_day_program';
import Search from './Search';
import DataContainer from './DataContainer';
import CompareDistricts from './ComparedCards';
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
    const compareItem = district.findByName(location);
    const compareList = this.state.compare;
    const index = compareList.indexOf(compareItem)
    console.log('compareItem', compareItem);
    console.log('compareList', compareList);
    console.log('index', index);
    if(compareList.length > 1){
      compareList.pop()
      this.setState({
        compare: compareList
      })
      compareList.push(compareItem)
      this.setState({
        compare: compareList
      })
    }
    else if(compareList.includes(compareItem)) {
      compareList.slice(index, 1)
      this.setState({
        compare: compareList
      })
    } else{
      compareList.push(compareItem)
      this.setState({
        compare: compareList
      })

    }
    console.log('compare State:', this.state.compare);
  }

  render() {
    return (
      <div>
        <Search handleChange={ this.handleChange } />
        <CompareDistricts compareInfo={ this.state.compare} compare={ this.compareDistricts}/>
        <DataContainer schoolInfo={ this.state.data } compare={ this.compareDistricts }/>
      </div>
    )
  }
}

export default App;
