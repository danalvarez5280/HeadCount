import React, { Component } from 'react';

const DataCards = ({location, yearData}) => {

  let schoolYear= Object.keys(yearData)
  let percentages = schoolYear.map( (val, i) => <p key={ i } > { val }: { yearData[val] } </p> )

  return(
    <div className='data-card'>
      <h2>{ location }</h2>
      <div className='year-stats'>
        { percentages }
      </div>
    </div>
  )
}

export default DataCards;
