import React from 'react';
import DataCards from './DataCards';


const DataContainer = ({ schoolInfo, toggleClass, hideYears }) => {

  const districtInfo = schoolInfo.map( (school, i) => <DataCards key={ i } location={ school.location } yearData={ school.data } toggleClass={ toggleClass } hideYears={ hideYears }/> )

  return(
    <div className='data-container'>
      { districtInfo }
    </div>
  )
}

export default DataContainer;
