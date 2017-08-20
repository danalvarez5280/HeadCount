import React from 'react';
import DistrictRepository from './helper';
import kinderData from '../data/kindergartners_in_full_day_program';
import PropTypes from 'prop-types';

const district = new DistrictRepository(kinderData)

const DistrictCompare = ({ comparisonData, handleReset }) => {
  const distOne = (comparisonData[0]).location;
  const distTwo = (comparisonData[1]).location;
  const compareTwoDistricts = district.compareDistrictAverages(distOne, distTwo);
  const keys = Object.keys(compareTwoDistricts);
  const keyValues = keys.map(data => compareTwoDistricts[data]);

  return(
    <div className='district-compare'>
      <div className='comp-info'>
        <p className='dist-one'>{distOne}: {keyValues[0]}</p>
        <p className='dist-two'>{distTwo}: {keyValues[1]}</p>
        <p className='compare-val'>Comparison Data: {keyValues[2]}</p>
      </div>
      <button className='reset-btn' type='Submit' onClick={ handleReset } >Reset</button>
    </div>
  )
}

DistrictCompare.propTypes = {
  comparisonData: PropTypes.array.isRequired,
  handleReset: PropTypes.func
}

export default DistrictCompare;
