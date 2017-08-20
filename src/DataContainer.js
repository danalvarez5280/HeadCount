import React from 'react';
import DataCards from './DataCards';
import PropTypes from 'prop-types';


const DataContainer = ({ schoolInfo, compareDistricts, display }) => {

  const districtInfo = schoolInfo.map( (school, i) => <DataCards key={ i } location={ school.location } yearData={ school.data } compareDistricts={ compareDistricts } display={ display } /> )

  return(
    <div className='data-container'>
      { districtInfo }
    </div>
  )
}

DataContainer.propTpes = {
  schoolInfo: PropTypes.array.isRequired,
  compareDistricts: PropTypes.func
}

export default DataContainer;
