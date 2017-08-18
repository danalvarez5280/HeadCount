import React from 'react';
import DataCards from './DataCards';

const CompareDistricts = ({ compareInfo, compare }) => {
  const displayData = false;
  const compareArray = compareInfo.map( (school) => <DataCards location={ school.location } yearData={ school.data } compare={ compare } displayData={displayData} /> )

  return(
    <div className="compare-container">
      { compareArray }
    </div>
  )
}

export default CompareDistricts;
