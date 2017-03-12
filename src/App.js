import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { DataCard } from './dataCard/dataCard.js';
import { CompareCards } from './compareCards/compareCards.js';
import { Search } from './search/search.js';
import DistrictRepository from './helper.js';
import kinderData from '../data/kindergartners_in_full_day_program.js';
const districtRepo = new DistrictRepository(kinderData)


class App extends Component {
  render() {
    return (
      <div>
      Headcount
      </div>
    );
  }
}

export default App;
