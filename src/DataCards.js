import React, { Component } from 'react';

const DataCards = ({location, yearData}) => {

  let schoolYear= Object.keys(yearData)
  let percentages = schoolYear.map( (val, i) => <p key={ i } > { val }: { yearData[val] } </p> )

  return(
    <div>
      <h2>{ location }</h2>
      <div>
        { percentages }
      </div>
    </div>
  )
}

export default DataCards;
