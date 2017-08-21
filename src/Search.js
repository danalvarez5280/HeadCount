import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Search = ({ handleChange }) => {

  return(
    <header className='search-field'>
      <h1>HeadCount 2.0</h1>
      <input className='search' placeholder='Search District Name' onChange={ handleChange }/>
    </header>
  )
}

Search.propTypes = {
  handleChange: PropTypes.func,
}

export default Search;
