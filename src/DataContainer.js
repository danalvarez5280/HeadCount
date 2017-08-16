import React, { Component } from 'react';
import DistrictRepository from './helper';
import DataCards from './DataCards';


const DataContainer = ({ schoolInfo }) => {

  const districtInfo = schoolInfo.map( (school, i) => <DataCards key={ i } location={ school.location } yearData={ school.data } /> )

  return(
    <div>
      { districtInfo }
    </div>
  )
}

export default DataContainer;
