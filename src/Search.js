import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Search extends Component {
  constructor() {
    super();

    // this.handleClick = this.handleClick.bind(this);
  }

  // handleClick() {
  //   console.log('clicked');
  // }

  render() {
    return(
      <div className='search-field'>
        <input className='search' placeholder='Search District Name' onChange={ this.props.handleChange }/>
        {/* <button className='submit-btn' type='Submit'  >Submit</button> */}
      </div>
    )
  }
}

Search.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func
}
