import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ handleChange }) => {

  return(
    <div className='search-field'>
      <input className='search' placeholder='Search District Name' onChange={ handleChange }/>
    </div>
  )
}

Search.propTypes = {
  handleChange: PropTypes.func,
}

export default Search;
