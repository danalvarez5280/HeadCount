import React, { Component } from 'react';
import DistrictRepository from './helper';

export default class Search extends Component {
  constructor() {
    super();

    this.state = {
      districtSearch: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      districtSearch: e.target.value
    })
  }

  handleClick() {
    console.log('clicked');
  }

  render() {
    return(
      <div className='search-field'>
        <input className='search' placeholder='Search' value={this.state.districtSearch} onChange={this.handleChange}/>
        <button className='submit-btn' type='Submit' onClick={this.handleClick}> Submit </button>
      </div>
    )
  }
}
