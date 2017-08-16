import React from 'react';
import DataCards from './DataCards';
import PropTypes from 'prop-types';


const DataContainer = ({ schoolInfo, toggleClass, hideYears }) => {

  const districtInfo = schoolInfo.map( (school, i) => <DataCards key={ i } location={ school.location } yearData={ school.data } toggleClass={ toggleClass } hideYears={ hideYears }/> )

  return(
    <div className='data-container'>
      { districtInfo }
    </div>
  )
}

DataContainer.propTpes = {
  schoolInfo: PropTypes.array.isRequired,
  toggleClass: PropTypes.string.isRequired,
  hideYears: PropTypes.string.isRequired
}

export default DataContainer;
