import React from 'react';
import DataCards from './DataCards';
import PropTypes from 'prop-types';


const DataContainer = ({ schoolInfo, compareDistricts }) => {

  const districtInfo = schoolInfo.map( (school, i) => <DataCards key={ i } location={ school.location } yearData={ school.data } compareDistricts={ compareDistricts } /> )

  return(
    <div className='data-container'>
      { districtInfo }
    </div>
  )
}

DataContainer.propTpes = {
  schoolInfo: PropTypes.array.isRequired,
}

export default DataContainer;
