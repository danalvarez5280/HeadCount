import React, { Component } from 'react';

export default class Search extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('clicked');
  }

  render() {
    return(
      <div className='search-field'>
        <input className='search' placeholder='Search' onChange={ this.props.handleChange }/>
        <button className='submit-btn' type='Submit' onClick={ this.handleClick }> Submit </button>
      </div>
    )
  }
}
