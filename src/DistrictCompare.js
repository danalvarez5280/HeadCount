import React from 'react';
import DataCards from './DataCards';
import DistrictRepository from './helper';
import kinderData from '../data/kindergartners_in_full_day_program';
import PropTypes from 'prop-types';

const district = new DistrictRepository(kinderData)

const DistrictCompare = ({ comparisonData, removeCompare }) => {

  const distOne = (comparisonData[0]).location
  const distTwo = (comparisonData[1]).location
  const compareTwoDistricts = district.compareDistrictAverages(distOne, distTwo)
  const keys = Object.keys(compareTwoDistricts)
  const keyValues = keys.map(data => compareTwoDistricts[data])
  const dataDisplay = comparisonData.map((district, i) =>
    <DataCards key={ i } location={ district.location } yearData={ district.data } compare={ removeCompare }/>)

  return(
    <div className='district-compare'>
      {dataDisplay}
      <div className='comp-info'>
        <p>{distOne}: {keyValues[0]}</p>
        <p>{distTwo}: {keyValues[1]}</p>
        <p>Comparison Data: {keyValues[2]}</p>
      </div>
    </div>
  )
}

DistrictCompare.propTypes = {
  comparisonData: PropTypes.array.isRequired
}

export default DistrictCompare;
