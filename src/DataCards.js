import React from 'react';

const DataCards = ({location, yearData, toggleClass, hideYears}) => {

  let schoolYear= Object.keys(yearData)
  let percentages = schoolYear.map( (val, i) => <p key={ i } > { val }: { yearData[val] } </p> )

  return(
    <div className='data-card' onClick={ hideYears }>
      <div className='district-name' >
        <h2>{ location }</h2>
      </div>
      <div className={ toggleClass }>
        { percentages }
      </div>
    </div>
  )
}

export default DataCards;
